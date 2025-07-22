
merge(fl, fr, l, r) = merged with {
  merged = fl + l,fr + r;
};

fx(l, r) = return with {
  return = l,r : merge ~ (_,_);
};

process = _,_ : fx : _,_;