import React, { useState } from 'react';
const Work = () => 
{
    const [elems,setElems]=useState([
        { heading:"Pixelflakes",
        subheading:"Architectural Marketing Agency",
        video:'https://download-video.akamaized.net/v3-1/playback/bfac2114-1cd7-4a50-8b21-ec941cbfb811/1f289d51?__token__=st=1716806225~exp=1716820625~acl=%2Fv3-1%2Fplayback%2Fbfac2114-1cd7-4a50-8b21-ec941cbfb811%2F1f289d51%2A~hmac=1bf3baf31f129d8e7ff7150f3c09940708f7826574d479963f0aba081f81b6f5&r=dXMtd2VzdDE%3D&_sm_au_=iVVM3H0PQWJ2QFRjM7BKNK07qH22M',
        image:"https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)"  },
        {
            heading:"Columbia Pictures",
            subheading:"Celebrating a Century of Cinema",
            video:"https://download-video.akamaized.net/v3-1/playback/4bdb3586-71c8-40be-b000-2ba5691333a3/dee0a4f7?__token__=st=1716806185~exp=1716820585~acl=%2Fv3-1%2Fplayback%2F4bdb3586-71c8-40be-b000-2ba5691333a3%2Fdee0a4f7%2A~hmac=68e6c10046de0554089acd98e28a7b17ee693d3823e1ea9ea3b3bb65dcdbc580&r=dXMtY2VudHJhbDE%3D&_sm_au_=iVVM3H0PQWJ2QFRjM7BKNK07qH22M",
            image:"https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
        },
        {
            heading:"Rino & Pelle",
            subheading:"Effortless chic lifestyle",
            video:"https://download-video.akamaized.net/v3-1/playback/66710880-7060-4d65-965e-38a29da54c52/5ac47112?__token__=st=1716806523~exp=1716820923~acl=%2Fv3-1%2Fplayback%2F66710880-7060-4d65-965e-38a29da54c52%2F5ac47112%2A~hmac=d2b481711c37229092e968e8af94af530f18e3fc677f4fce5edefa4ac382af83&r=dXMtY2VudHJhbDE%3D&_sm_au_=iVVM3H0PQWJ2QFRjM7BKNK07qH22M",
            image:"https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)",
        },
        {
            heading:"Aebele Interiors",
            subheading:"Luxurious design experience",
            video:"https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
            image:"https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
        }
    ])
    return (
        <div className='w-full relative'>
            <div className="max-w-screen-2xl mx-auto px-5 py-20 sm:px-10">
                <div className="featured flex gap-2">
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                        <h1 className=''>Featured</h1>
                    </div>
                    <h1 className='text-6xl my-5'>Work</h1>
                    <p className='leading-2 text-md'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
                    <div className="elems mt-10">
                        {
                            elems.map((item,i)=>(        
                                <div key={i} className="elem w-full">
                                    <div className="video w-full h-[104vw] relative overflow-hidden">
                                        <img className='hidden sm:block w-full h-full object-cover' src={item.image} alt="" />
                                        <video autoPlay loop muted
                                        className='w-full h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' src={item.video}/>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className='font-semibold'>Pixelflakes</h3>
                                        <h4 className='opacity-40'>Architectural Marketing Agency</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            </div>
        </div>
    );
}

export default Work;
