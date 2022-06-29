// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FaustModuleAny from "@grame/libfaust/libfaust-wasm";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Faust as FaustAny } from "./FaustLibrary";
import type { Faust as FaustType } from "./FaustLibrary.types";
export type { MonoFactory, Compiler } from "./FaustLibrary.types";

type FaustModuleType = () => Promise<unknown>;

export const FaustModule = FaustModuleAny as FaustModuleType;
export const Faust = FaustAny as FaustType;
