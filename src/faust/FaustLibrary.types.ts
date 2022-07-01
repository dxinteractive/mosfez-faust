/* eslint-disable */

type FaustModule = unknown;
type LibFaust = unknown;

// FaustWap.d.ts

/**
 * WAP (Web Audio Plugins see https://github.com/micbuffa/WebAudioPlugins) API.
 */
export interface WAP {
  fBaseURL: string;

  getMetadata(): Promise<string>;

  setParam(path: string, value: number): void;
  getParam(path: string): number;

  inputChannelCount(): number;
  outputChannelCount(): number;

  // TODO (proper typing)
  getDescriptor(): any;

  onMidi(data: number[] | Uint8Array): void;
}

export interface FaustMonoWAPNode extends FaustMonoNode, WAP {}

export interface MonoWAPFactory {
  load(
    wasm_path: string,
    json_path: string,
    sp: boolean
  ): Promise<FaustMonoWAPNode | null>;
}

export interface FaustPolyWAPNode extends FaustPolyNode, WAP {}

export interface PolyWAPFactory {
  load(
    voice_path: string,
    voice_json_path: string,
    effect_path: string,
    effect_json_path: string,
    mixer32_path: string,
    mixer64_path: string,
    voices: number,
    sp: boolean,
    buffer_size?: number
  ): Promise<FaustPolyWAPNode | null>;
}

// FaustGenerator.d.ts

/**
 * The Faust wasm instance interface.
 */
export interface InstanceAPI {
  /**
   * The dsp computation, to be called with successive input/output audio buffers.
   *
   * @param {DSP} dsp - the DSP pointer
   * @param {number} count - the audio buffer size in frames
   * @param {AudioBuffer} inputs - the input audio buffer as in index in wasm memory
   * @param {AudioBuffer} output - the output audio buffer as in index in wasm memory
   */
  compute(
    dsp: DSP,
    count: number,
    inputs: AudioBuffer,
    output: AudioBuffer
  ): void;

  /**
   * Give the number of inputs of a Faust wasm instance.
   *
   * @param {DSP} dsp - the DSP pointer
   */
  getNumInputs(dsp: DSP): number;

  /**
   * Give the number of outputs of a Faust wasm instance.
   *
   * @param {DSP} dsp - the DSP pointer
   */
  getNumOutputs(dsp: DSP): number;

  /**
   * Give a parameter current value.
   *
   * @param {DSP} dsp - the DSP pointer
   * @param {number} index - the parameter index
   * @preturn {number} the parameter value
   */
  getParamValue(dsp: DSP, index: number): number;

  /**
   * Give the Faust wasm instance sample rate.
   *
   * @param {DSP} dsp - the DSP pointer
   * @preturn {number} the sample rate
   */
  getSampleRate(dsp: DSP): number;

  /**
   * Global init, calls the following methods:
   * - static class 'classInit': static tables initialization
   * - 'instanceInit': constants and instance state initialization
   *
   * @param {DSP} dsp - the DSP pointer
   * @param sample_rate - the sampling rate in Hertz
   */
  init(dsp: DSP, sample_rate: number): void;

  /** Init instance state (delay lines...).
   *
   * @param {DSP} dsp - the DSP pointer
   */
  instanceClear(dsp: DSP): void;

  /** Init instance constant state.
   *
   * @param {DSP} dsp - the DSP pointer
   * @param sample_rate - the sampling rate in Hertz
   */
  instanceConstants(dsp: DSP, sample_rate: number): void;

  /** Init instance state.
   *
   * @param {DSP} dsp - the DSP pointer
   * @param sample_rate - the sampling rate in Hertz
   */
  instanceInit(dsp: DSP, sample_rate: number): void;

  /** Init default control parameters values.
   *
   * @param {DSP} dsp - the DSP pointer
   */
  instanceResetUserInterface(dsp: DSP): void;

  /**
   * Set a parameter current value.
   *
   * @param {DSP} dsp - the DSP pointer
   * @param {number} index - the parameter index
   * @param {number} value - the parameter value
   */
  setParamValue(dsp: DSP, index: number, value: number): void;
}

/**
 * Monophonic instance.
 */
export interface MonoInstance {
  memory: WebAssembly.Memory;
  api: InstanceAPI;
  json: string;
}

/**
 * Polyphonic instance.
 */
export interface PolyInstance {
  memory: WebAssembly.Memory;
  voices: number;
  voice_api: InstanceAPI;
  effect_api?: InstanceAPI;
  mixer_api: MixerAPI;
  voice_json: string;
  effect_json?: string;
}

/**
 * Mixer used in polyphonic mode.
 */
export interface MixerAPI {
  clearOutput(bufferSize: number, chans: number, outputs: AudioBuffer): void;
  mixCheckVoice(
    bufferSize: number,
    chans: number,
    inputs: AudioBuffer,
    outputs: AudioBuffer
  ): number;
  fadeOut(bufferSize: number, chans: number, outputs: AudioBuffer): void;
}

/**
 * The generator constructor.
 */

export interface Generator {
  /**
   * Create a factory from Faust statically compiled wasm (either 'monophonic' or 'polyphonic') and JSON files.
   * This function is running asynchronously.
   *
   * @param {string} wasm_path - the wasm file pathname
   * @param {string} json_path - the JSON file pathname
   * @returns {Promise<Factory | null>} on completion, gives a wasm module and retains the poly status given as parameter.
   */
  loadDSPFactory(wasm_path: string, json_path: string): Promise<Factory | null>;

  /**
   * Create a WebAssembly module from the wasm mixer file.
   * This function is running asynchronously.
   *
   * @param {string} mixer_path - the mixer wasm file pathname
   * @returns {Promise<WebAssembly.Module | null>} on completion, the mixer wasm module.
   */
  loadDSPMixer(mixer_path: string): Promise<WebAssembly.Module | null>;

  /**
   * Asynchronously create a wasm instance using a wasm factory.
   *
   * @param {Factory} module - a module previously created using createDSPFactory or loadDSPFactory
   * @returns {Promise<Instance>} returns a monophonic instance.
   */
  createAsyncMonoDSPInstance(factory: Factory): Promise<MonoInstance>;

  /**
   * Synchronously create a wasm instance using a wasm factory.
   *
   * @param {Factory} module - a module previously created using createDSPFactory or loadDSPFactory
   * @returns {Instance} returns a monophonic instance.
   */
  createSyncMonoDSPInstance(factory: Factory): MonoInstance;

  /**
   * Asynchronously create a polyphonic wasm instance using a wasm voice factory and effect factory.
   *
   * @param {Factory} voice_factory - a factory previously created using createDSPFactory or loadDSPFactory
   * @param {WebAssembly.Module} mixer_module - a WebAssembly module previously created using loadDSPMixer
   * @param {number} voices - the number of voices to be created
   * @param {Factory} effect_factory - a factory previously created using createDSPFactory or loadDSPFactory
   * @returns {Promise<PolyInstance>} returns a polyphonic instance.
   */
  createAsyncPolyDSPInstance(
    voice_factory: Factory,
    mixer_module: WebAssembly.Module,
    voices: number,
    effect_factory?: Factory
  ): Promise<PolyInstance>;

  /**
   * Synchronously create a polyphonic wasm instance using a wasm voice factory and effect factory.
   *
   * @param {Factory} voice_factory - a factory previously created using createDSPFactory or loadDSPFactory
   * @param {WebAssembly.Module} mixer_module - a module previously created using the mixer32.wasm file
   * @param {number} voices - the number of voices to be created
   * @param {Factory} effect_factory - a factory previously created using createDSPFactory or loadDSPFactory
   * @returns {PolyInstance} returns a polyphonic instance.
   */
  createSyncPolyDSPInstance(
    voice_factory: Factory,
    mixer_module: WebAssembly.Module,
    voices: number,
    effect_factory?: Factory
  ): PolyInstance;
}

// FaustCompiler.d.ts

// type AudioBuffer = number;
type DSP = number;

type TFaustJSON = {
  name: string;
  filename: string;
  compile_options: string;
  include_pathnames: string[];
  inputs: number;
  outputs: number;
  size: number;
  version: string;
  library_list: string[];
  meta: { [key: string]: string }[];
  ui: TFaustUI;
};

type TFaustUI = TFaustUIGroup[];
type TFaustUIItem = TFaustUIInputItem | TFaustUIOutputItem | TFaustUIGroup;
type TFaustUIInputItem = {
  type: TFaustUIInputType;
  label: string;
  address: string;
  index: number;
  init: number;
  min: number;
  max: number;
  step: number;
  meta?: TFaustUIMeta[];
};

type TFaustUIOutputItem = {
  type: TFaustUIOutputType;
  label: string;
  address: string;
  index: number;
  min: number;
  max: number;
  meta: TFaustUIMeta[];
};

type TFaustUIMeta = {
  [order: number]: string;
  style: string; // "knob" | "menu{'Name0':value0;'Name1':value1}" | "radio{'Name0':value0;'Name1':value1}" | "led";
  unit: string;
  scale: "linear" | "exp" | "log";
  tooltip: string;
  hidden: string;
  [key: string]: string;
};

type TFaustUIGroupType = "vgroup" | "hgroup" | "tgroup";
type TFaustUIOutputType = "hbargraph" | "vbargraph";
type TFaustUIInputType =
  | "vslider"
  | "hslider"
  | "button"
  | "checkbox"
  | "nentry";
type TFaustUIGroup = {
  type: TFaustUIGroupType;
  label: string;
  items: TFaustUIItem[];
};
// type TFaustUIType = TFaustUIGroupType | TFaustUIOutputType | TFaustUIInputType;

/**
 * The Factory structure.
 * cfactory: a "pointer" (as an integer) on the internal C++ factory
 * code: the WASM code as a binary array
 * module: the compule WASM module
 * json: the compiled DSP JSON description
 * poly: whether the factory is a polyphonic one or not
 */
export interface Factory {
  cfactory: number;
  code: Uint8Array;
  module: WebAssembly.Module;
  json: string;
  poly: boolean;
}

/**
 * The Compiler constructor.
 *
 * @param {LibFaust} engine - an instance of the low level engine, actually a libFaustWasm instance of FaustModule
 * @return the created compiler object
 */

export interface Compiler {
  /**
   * Gives the Faust compiler version.
   * @return {string} a version string
   */
  version(): string;

  /**
   * Gives the last compilation error.
   * @return {string} an error string
   */
  getErrorMessage(): string;

  /**
   * Create a wasm factory from Faust code i.e. wasm compiled code, to be used to create monophonic instances.
   * This function is running asynchronously.
   *
   * @param {string} name - an arbitrary name for the Faust factory
   * @param {string} dsp_code - Faust dsp code
   * @param {string} args - the compiler options
   * @returns {Promise<Factory | null>} returns the wasm factory
   */
  createMonoDSPFactory(
    name: string,
    dsp_code: string,
    args: string
  ): Promise<Factory | null>;

  /**
   * Create a wasm factory from Faust code i.e. wasm compiled code, to be used to create polyphonic instances.
   * This function is running asynchronously.
   *
   * @param {string} name - an arbitrary name for the Faust factory
   * @param {string} dsp_code - Faust dsp code
   * @param {string} args - the compiler options
   * @returns {Promise<Factory | null>} returns the wasm factory
   */
  createPolyDSPFactory(
    name: string,
    dsp_code: string,
    args: string
  ): Promise<Factory | null>;

  /**
   * Delete a dsp factory.
   *
   * @param {Factory} factory - the factory to be deleted
   */
  deleteDSPFactory(factory: Factory): void;

  /**
   * Expand Faust code i.e. linearize included libraries.
   *
   * @param {string} dsp_code - Faust dsp code
   * @param {string} args - the compiler options
   * @returns {interface} returns the expanded dsp code
   */
  expandDSP(dsp_code: string, args: string): string | null;

  /**
   * Generates auxiliary files from Faust code. The output depends on the compiler options.
   *
   * @param {string} name - an arbitrary name for the Faust module
   * @param {string} dsp_code - Faust dsp code
   * @param {string} args - the compiler options
   * @returns {boolean} whether the generation actually succeded
   */
  generateAuxFiles(name: string, dsp_code: string, args: string): boolean;

  /**
   * Delete all factories.
   */
  deleteAllDSPFactories(): void;
}

// FaustUtilities.d.ts

export interface SVGDiagrams {
  /**
   * Generates auxiliary files from Faust code. The output depends on the compiler options.
   *
   * @param {string} name - the svg file name (default to "process.svg")
   * @returns {string} the svg diagram as a string
   */
  getSVG(name?: string): string;

  /**
   * Gives an error message in case success() returns false.
   * @returns {string} the error message
   */
  error(): string;

  /**
   * Gives the status of the SVGDiagram object.
   * May fail to generate the diagrams if the dsp code is incorrect.
   * @returns {boolean} the svg diagram as a string
   */
  success(): boolean;
}

// FaustWebAudio.d.ts

// Public API
export interface OutputParamHandler {
  (path: string, value: number): void;
}
export interface ComputeHandler {
  (buffer_size: number): void;
}
export interface PlotHandler {
  (
    plotted: Float32Array[],
    index: number,
    events?: { type: string; data: any }[]
  ): void;
}
export interface MetadataHandler {
  (key: string, value: string): void;
}

// Implementation API
export interface UIHandler {
  (item: TFaustUIItem): void;
}

/**
 * DSP implementation: mimic the C++ 'dsp' class:
 * - adding MIDI control: metadata are decoded and incoming MIDI messages will control the associated controllers
 * - an output handler can be set to treat produced output controllers (like 'bargraph')
 * - regular controllers are handled using setParamValue/getParamValue
 */
export interface BaseDSP {
  /**
   * Set the parameter output handler, to  be called in the 'compute' method with output parameters (like bargraph).
   *
   * @param {OutputParamHandler} handler - the output handler
   */
  setOutputParamHandler(handler: OutputParamHandler | null): void;

  /**
   * Get the parameter output handler.
   *
   * @return {OutputParamHandler} the current output handler
   */
  getOutputParamHandler(): OutputParamHandler | null;

  /**
   * Set the compute handler, to  be called in the 'compute' method with buffer size.
   *
   * @param {ComputeHandler} handler - the compute handler
   */
  setComputeHandler(handler: ComputeHandler | null): void;

  /**
   * Get the compute handler.
   *
   * @return {ComputeHandler} the current output handler
   */
  getComputeHandler(): ComputeHandler | null;

  /**
   * Set the plot handler, to  be called in the 'compute' method with various info (see PlotHandler type).
   *
   * @param {PlotHandler} handler - the plot handler
   */
  setPlotHandler(handler: PlotHandler | null): void;

  /**
   * Get the plot handler.
   *
   * @return {PlotHandler} the current plot handler
   */
  getPlotHandler(): PlotHandler | null;

  /**
   * Return instance number of audio inputs.
   *
   * @return {number} the instance number of audio inputs
   */
  getNumInputs(): number;

  /**
   * Return instance number of audio outputs.
   *
   * @return {number} the instance number of audio outputs
   */
  getNumOutputs(): number;

  /**
   * DSP instance computation, to be called with successive input/output audio buffers, using their size.
   *
   * @param {Float32Array[]} inputs - the input audio buffers
   * @param {Float32Array[]} outputs - the output audio buffers
   */
  compute(inputs: Float32Array[], outputs: Float32Array[]): boolean;

  /**
   * Give a handler to be called on 'declare key value' kind of metadata.
   *
   * @param {MetadataHandler} handler - the handler to be used
   */
  metadata(handler: MetadataHandler): void;

  /**
   * Handle untyped MIDI messages.
   *
   * @param {number[] | Uint8Array} data - and arry of MIDI bytes
   */
  midiMessage(data: number[] | Uint8Array): void;

  /**
   * Handle MIDI ctrlChange messages.
   *
   * @param {number} channel - the MIDI channel (0..15, not used for now)
   * @param {number} ctrl - the MIDI controller number (0..127)
   * @param {number} value - the MIDI controller value (0..127)
   */
  ctrlChange(chan: number, ctrl: number, value: number): void;

  /**
   * Handle MIDI pitchWheel messages.
   *
   * @param {number} channel - the MIDI channel (0..15, not used for now)
   * @param {number} value - the MIDI controller value (0..16383)
   */
  pitchWheel(chan: number, value: number): void;

  /**
   * Set parameter value.
   *
   * @param {string} path - the path to the wanted parameter (retrieved using 'getParams' method)
   * @param {number} val - the float value for the wanted control
   */
  setParamValue(path: string, value: number): void;

  /**
   * Get parameter value.
   *
   * @param {string} path - the path to the wanted parameter (retrieved using 'getParams' method)
   *
   * @return {number} the float value
   */
  getParamValue(path: string): number;

  /**
   * Get the table of all input parameters paths.
   *
   * @return {string[]} the table of all input parameters paths
   */
  getParams(): string[];

  /**
   * Get DSP JSON description with its UI and metadata.
   *
   * @return {string} the DSP JSON description
   */
  getJSON(): string;

  /**
   * Get DSP UI description.
   *
   * @return {TFaustUI} the DSP UI description
   */
  getUI(): TFaustUI;

  /**
   * Get DSP UI items description.
   *
   * @return {TFaustUIItem[]} the DSP UI items description
   */
  getDescriptors(): TFaustUIInputItem[];

  /**
   * Start the DSP.
   *
   */
  start(): void;

  /**
   * Stop the DSP.
   *
   */
  stop(): void;

  /**
   * Destroy the DSP.
   *
   */
  destroy(): void;
}

/**
 * Monophonic DSP implementation.
 */

/**
 * The MonoDSP constructor.
 *
 * @param {MonoInstance} instance - an instance created with 'createSyncMonoDSPInstance' or 'createAsyncMonoDSPInstance'
 * @param {number} sample_rate - the sample rate in Hz
 * @param {number} sample_size - the sample size in bytes
 * @param {number} buffer_size - the buffer size in frames
 * @return the created MonoDSP object
 */
export interface createMonoDSP {
  (
    instance: MonoInstance,
    sample_rate: number,
    sample_size: number,
    buffer_size: number
  ): MonoDSP;
}

export interface MonoDSP extends BaseDSP {}

/**
 * Polyphonic DSP implementation.
 */

/**
 * The PolyDSP constructor.
 *
 * @param {PolyInstance} instance - an instance created with 'createSyncPolyDSPInstance' or 'createAsyncPolyDSPInstance'
 * @param {number} sample_rate - the sample rate in Hz
 * @param {number} sample_size - the sample size in bytes
 * @param {number} buffer_size - the buffer size in frames
 * @return the created PolyDSP object
 */
export interface createPolyDSP {
  (
    instance: PolyInstance,
    sample_rate: number,
    sample_size: number,
    buffer_size: number
  ): PolyDSP;
}

export interface PolyDSP extends BaseDSP {
  /**
   * Handle MIDI keyOn messages.
   *
   * @param {number} channel - the MIDI channel (0..15, not used for now)
   * @param {number} pitch - the MIDI pitch value (0..127)
   * @param {number} velocity - the MIDI velocity value (0..127)
   */
  keyOn(channel: number, pitch: number, velocity: number): void;

  /**
   * Handle MIDI keyOff messages.
   *
   * @param {number} channel - the MIDI channel (0..15, not used for now)
   * @param {number} pitch - the MIDI pitch value (0..127)
   * @param {number} velocity - the MIDI velocity value (0..127)
   */
  keyOff(channel: number, pitch: number, velocity: number): void;

  /**
   * Stop all playing notes.
   *
   * @param {boolean} hard - whether to immediately stop notes or put them in release mode
   */
  allNotesOff(hard: boolean): void;
}

/**
 * Monophonic AudioNode.
 */
export interface FaustMonoNode extends AudioNode, MonoDSP {}

/**
 * Polyphonic AudioNode.
 */
export interface FaustPolyNode extends AudioNode, PolyDSP {}

/**
 *  For offline rendering.
 */
export interface FaustOfflineProcessor {
  /**
   * Render frames in an array.
   *
   * @param {number} size - the number of frames to render
   * @return {number} an array of Float32Array[] with the rendered frames
   */
  plot(size: number): Float32Array[];
}

export interface MonoFactory {
  /**
   * Compile a monophonic WebAudio node (either ScriptProcessorNode or AudioWorkletNode).
   * Note that an internal cache avoids recompilation when a same DSP program is recompiled several times.
   *
   * @param {BaseAudioContext} context the WebAudio context
   * @param {string} name - the DSP name
   * @param {Compiler} compiler - the Faust compiler
   * @param {string} dsp_code - the DSP code
   * @param {string} args - the compilation parameters
   * @param {boolean} sp - whether to compile a ScriptProcessorNode or an AudioWorkletNode
   * @param {number} buffer_size - the buffer size in frames to be used, in ScriptProcessorNode only, since AudioWorkletNode always uses 128 frames
   * @preturn {Promise<FaustMonoNode | null>} the compiled WebAudio node or 'null' if failure
   */
  compileNode(
    context: BaseAudioContext,
    name: string,
    compiler: Compiler,
    dsp_code: string,
    args: string,
    sp: boolean,
    buffer_size?: number
  ): Promise<FaustMonoNode | null>;

  /**
   * Create a monophonic WebAudio node (either ScriptProcessorNode or AudioWorkletNode).
   *
   * @param {BaseAudioContext} context the WebAudio context
   * @param {string} name - the DSP name
   * @param {Factory} factory - the Faust factory, either obtained with a compiler (createDSPFactory) or loaded from files (loadDSPFactory)
   * @param {boolean} sp - whether to compile a ScriptProcessorNode or an AudioWorkletNode
   * @param {number} buffer_size - the buffer size in frames to be used in ScriptProcessorNode only, since AudioWorkletNode always uses 128 frames
   * @preturn {Promise<FaustMonoNode | null>} the compiled WebAudio node or 'null' if failure
   */
  createNode(
    context: BaseAudioContext,
    name: string,
    factory: Factory,
    sp: boolean,
    buffer_size?: number
  ): Promise<FaustMonoNode | null>;

  /**
   * Return the internal factory.
   *
   * @preturn {Factory | null} the internal factory which can be null if compilation failed
   */
  getFactory(): Factory | null;

  /**
   * Create a monophonic Offline processor.
   *
   * @param {Factory} factory - the Faust factory, either obtained with a compiler (createDSPFactory) or loaded from files (loadDSPFactory)
   * @param {number} sample_rate - the sample rate in Hz
   * @param {number} buffer_size - the buffer size in frames
   * @preturn {Promise<FaustOfflineProcessor | null>} the compiled processor or 'null' if failure
   */
  createOfflineProcessor(
    factory: Factory,
    sample_rate: number,
    buffer_size: number,
    input?: Float32Array[]
  ): Promise<FaustOfflineProcessor | null>;
}

export interface PolyFactory {
  /**
   * Compile a polyphonic WebAudio node from a single DSP file (either ScriptProcessorNode or AudioWorkletNode).
   * Note that the an internal cache avoid recompilation when a same DSP program is recompiled several times.
   *
   * @param {BaseAudioContext} context the WebAudio context
   * @param {string} name - the DSP name
   * @param {Compiler} compiler - the Faust compiler
   * @param {string} dsp_code - the DSP code ('dsp_code' can possibly contain an integrated effect)
   * @param {string | null} effect_code - optional effect DSP code
   * @param {string} args - the compilation parameters
   * @param {number} voices - the number of voices
   * @param {boolean} sp - whether to compile a ScriptProcessorNode or an AudioWorkletNode
   * @param {number} buffer_size - the buffer size in frames to be used, in ScriptProcessorNode only, since AudioWorkletNode always uses 128 frames
   * @preturn {Promise<FaustPolyNode | null>} the compiled WebAudio node or 'null' if failure
   */
  compileNode(
    context: BaseAudioContext,
    name: string,
    compiler: Compiler,
    dsp_code: string,
    effect_code: string | null,
    args: string,
    voices: number,
    sp: boolean,
    buffer_size?: number
  ): Promise<FaustPolyNode | null>;

  /**
   * Create a polyphonic WebAudio node (either ScriptProcessorNode or AudioWorkletNode).
   *
   * @param {BaseAudioContext} context the WebAudio context
   * @param {string} name - the DSP name
   * @param {Factory} voice_factory - the Faust factory for voices, either obtained with a compiler (createDSPFactory) or loaded from files (loadDSPFactory)
   * @param {WebAssembly.Module} mixer_module - the wasm Mixer module (loaded from 'mixer32.wasm' or 'mixer64.wasm' files)
   * @param {number} voices - the number of voices
   * @param {boolean} sp - whether to compile a ScriptProcessorNode or an AudioWorkletNode
   * @param {Factory} effect_factory - the Faust factory for the effect, either obtained with a compiler (createDSPFactory) or loaded from files (loadDSPFactory)
   * @param {number} buffer_size - the buffer size in frames to be used in ScriptProcessorNode only, since AudioWorkletNode always uses 128 frames
   * @preturn {Promise<FaustPolyNode | null>} the compiled WebAudio node or 'null' if failure
   */
  createNode(
    context: BaseAudioContext,
    name: string,
    voice_factory: Factory,
    mixer_module: WebAssembly.Module,
    voices: number,
    sp: boolean,
    effect_factory?: Factory,
    buffer_size?: number
  ): Promise<FaustPolyNode | null>;

  /**
   * Return the internal voice factory.
   *
   * @preturn {Factory | null} the internal factory which can be null if compilation failed
   */
  getVoiceFactory(): Factory | null;

  /**
   * Return the internal effect factory.
   *
   * @preturn {Factory | null} the internal factory which can be null if compilation failed or if effect is not present
   */
  getEffectFactory(): Factory | null;
}

// ---------- index.d.ts

export type Faust = {
  /**
   * Instantiates the Faust Library.
   *
   * @param {string} module - the Faust Wasm module, typically retrieved with an async call to FaustModule()
   * @returns {LibFaust} an instance of Faust library
   */
  createLibFaust(module: FaustModule): LibFaust | null;

  /**
   * Creates a high level Faust compiler.
   *
   * @param {LibFaust} libfaust - an instance of the Faust Library
   * @returns {Compiler} an instance of the Faust compiler
   */
  createCompiler(libfaust: LibFaust): Compiler;

  /**
   * Creates a factory ready to generate Monophonic ScriptProcessorNode and AudioWorkletNode nodes.
   */
  createMonoFactory(): MonoFactory;

  /**
   * Creates a factory ready to generate Polyphonic ScriptProcessorNode and AudioWorkletNode nodes.
   */
  createPolyFactory(): PolyFactory;

  /**
   * Creates an instance of a Generator, which provides memory instances of Web assembly module,
   * as well as objects to access and manipulate theses instances.
   * @returns {Generator} a Generator
   */
  createGenerator(): Generator;

  /**
   * Higher level function to compile a WebAudio node from its DSP code.
   *
   * @param {BaseAudioContext} context the WebAudio context
   * @param {FaustModule} module - the Faust module as given by an async FaustModule() call
   * @param {string} dsp_code - the Faust dsp code (may contain an integrated effect)
   * @param {string | null} effect_code - optional effect DSP code, that can be used in place of the integrated effect model
   * @param {number} voices - the number of voices. When voices = 0, a monophonic node is created, otherwise a polyphonic one
   * @param {boolean} is_double - whether the sample has to be 'double'
   *
   * @preturn {Promise<FaustMonoNode | FaustPolyNode | null>} the compiled WebAudio node or 'null' in case of failure
   */
  compileAudioNode(
    context: BaseAudioContext,
    module: FaustModule,
    dsp_code: string,
    effect_code: string | null,
    voices: number,
    is_double: boolean
  ): Promise<FaustMonoNode | FaustPolyNode | null>;

  /**
   * Higher level function to compile a monophonic factory from its DSP code.
   *
   * @param {FaustModule} module - the Faust module as given by an async FaustModule() call
   * @param {string} dsp_code - the Faust dsp code
   * @param {boolean} is_double - whether the sample has to be 'double'
   *
   * @preturn {Promise<Factory| null>} the compiled monophonic factory or 'null' in case of failure
   */
  compileMonoFactory(
    module: FaustModule,
    dsp_code: string,
    is_double: boolean
  ): Promise<Factory | null>;

  /**
   * Higher level function to compile a polyphonic factory from its DSP code.
   *
   * @param {FaustModule} module - the Faust module as given by an async FaustModule() call
   * @param {string} dsp_code - the Faust voice dsp code (may contain an integrated effect)
   * @param {string | null} effect_code - optional effect DSP code, that can be used in place of the integrated effect model
   * @param {boolean} is_double - whether the sample has to be 'double'
   *
   * @preturn {[Promise<Factory | null>, Promise<Factory | null>]} a tuple of compiled monophonic factory or 'null' in case of failure
   */
  compilePolyFactory(
    module: FaustModule,
    voice_code: string,
    effect_code: string | null,
    is_double: boolean
  ): [Promise<Factory | null>, Promise<Factory | null>];

  /**
   * Higher level function to create a monophonic WebAudio node from its (precompiled) wasm code.
   *
   * @param {BaseAudioContext} context the WebAudio context
   * @param {string} wasm_path - the wasm file path
   * @param {string} json_path - the JSON file path
   * @param {number} buffer_size - the buffer size, used in ScriptProcessor mode
   *
   * @preturn {Promise<FaustMonoNode | null>} the compiled WebAudio node or 'null' in case of failure
   */
  createMonoAudioNode(
    context: BaseAudioContext,
    wasm_path: string,
    json_path: string,
    buffer_size?: number
  ): Promise<FaustMonoNode | null>;

  /**
   * Higher level function to create a polyphonic WebAudio node from its (precompiled) wasm code.
   *
   * @param {BaseAudioContext} context the WebAudio context
   * @param {string} voice_path - the wasm voice file path
   * @param {string} json_path - the voice JSON file path
   * @param {string | null} effect_path - the wasm effect file path
   * @param {string | null} effect_json_path - the effect JSON file path
   * @param {string} mixer_path - the wasm mixer path
   * @param {number} voices - the number of voices
   * @param {number} buffer_size - the buffer size, used in ScriptProcessor mode
   *
   * @preturn {Promise<FaustPolyNode | null>} the compiled WebAudio node or 'null' in case of failure
   */
  createPolyAudioNode(
    context: BaseAudioContext,
    voice_path: string,
    voice_json_path: string,
    effect_path: string,
    effect_json_path: string,
    mixer_path: string,
    voices: number,
    buffer_size?: number
  ): Promise<FaustPolyNode | null>;

  /**
   * The SVGDiagrams generator constructor.
   * You should check the object status using the success() method after creation.
   *
   * @param {LibFaust} engine - an instance of the Faust engine
   * @param {string} name - an arbitrary name for the Faust module
   * @param {string} dsp_code - Faust dsp code
   * @param {string} args - the compiler options, only svg specific options are meaningfull (automatically appends -svg)
   */
  createSVGDiagrams(
    engine: LibFaust,
    name: string,
    dsp_code: string,
    args: string
  ): SVGDiagrams;

  /**
   * WAP (Web Audio Plugins see https://github.com/micbuffa/WebAudioPlugins) API.
   */
  createMonoAudioWAPFactory(
    context: BaseAudioContext,
    baseURL: string
  ): MonoWAPFactory;

  createPolyWAPFactory(
    context: BaseAudioContext,
    baseURL: string
  ): PolyWAPFactory;

  /**
   * Transforms a Faust processor JSON description into a high level structured object.
   *
   * @param {string} json - a jsong string
   * @returns {TFaustJSON} a high level structured object describing a Faust processor
   */
  createFaustJSON(json: string): TFaustJSON;
};

// Moved at the end of the file to please Visual Studio code completion tools.

/************************************************************************
 ************************************************************************
    FAUST compiler
    Copyright (C) 2003-2020 GRAME, Centre National de Creation Musicale
    ---------------------------------------------------------------------
    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation; either version 2.1 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
 ************************************************************************
 ************************************************************************/
