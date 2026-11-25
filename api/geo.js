module.exports=(req,res)=>{
  const h=req.headers,d=v=>{try{return decodeURIComponent(v)}catch(e){return v||''}};
  res.setHeader('Cache-Control','no-store');
  res.status(200).json({lat:h['x-vercel-ip-latitude']||null,lon:h['x-vercel-ip-longitude']||null,city:d(h['x-vercel-ip-city'])});
};
