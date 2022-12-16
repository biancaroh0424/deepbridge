
    const N = 20;
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [['white'][Math.round(Math.random() * 1)], ['white','blue','gray'][Math.round(Math.random() * 1)]]
    }));

    Globe()
       .globeImageUrl('images/worldmap3.png')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
    //    .showGlobe(false)
    // .backgroundColor('black')
        // .showAtmosphere(false)
      .arcsData(arcsData)
      .arcColor('color')
      .atmosphereColor('white')
      .arcDashLength(() => Math.random())
      .arcDashGap(() => Math.random())
      .arcDashAnimateTime(() => Math.random() * 4000 + 500)
      
      (document.getElementById('globeViz'))
