import React from 'react'
import "./self.scss"
const Selfform = () => {
  return (
    
    <div className='selfform1'> 

  <div className="selfheadline">

  <div className="headlinesstoredetails">
      Add Shelf 
  </div>
  </div>
  <div className='selfform'> 
    <div className="selfdetailslist">

        <div className="selfdetailhead">
            <div className="selfinfoheadbox">
            <div className="selfinfo">Shelf Information</div>
            <div className="selflistdesc">Tell us about your Self. These specifics will help us figure out the best clients for you.</div>
            </div>
        </div>

        <div className="selflistdata">
                <div className="selfdataname">
                   <div className="selfname1">Shelf name</div>
                    <div className="selfnamefield">
                    <div className="selfinputname">shelf name</div>
                     </div>
                 </div>

            <div className="selfdatadesc">
                <div className="selfdesc1">Shelf description</div>
                <div className="selfdescfield">
                    <div className="selfinputdesc"> enter small  self description</div>
                </div>
            </div>
            <div className="selftyperent">
                <div className="selfdatatype">
                    <div className="selftype1">Shelf Type </div>
                    <div className="selftypefield">
                        <div className="selfinputtype">selftype </div>
                    </div>
                </div>
                <div className="selfrateperday">
                <div className="selfdatarate">Shelf Rent / Day</div>
                <div className= "selfdatarateinput">
<div className="selfrateeurosign"><div className="eurosign">£</div></div>
<div className="ratevalueinput">255</div>
</div>
                
                </div>
            </div>
        </div>

        </div>




            <div className="selfimgagebox">

            <div className="selfimgbox">
            <div className="selfimgehead">Shelf Images</div>
            <div className="selfimageheaddesc">Tell us about your Store. These specifics will help us figure out the best clients for you. </div>
            </div>
            
                       <div className="selfuploadbox2">
                     <div className="selfimgupload">
                        <img className="selfimguploadname" alt="" src="https://i.postimg.cc/BQ7jZ1hX/Frame-3508.png"/>
                     </div>
                     <div className="selfuploaddesc">
                              <span className='selfuploadclickme'>Click here</span>
                              <span className="selfuploadinstr"> to upload or drop media here</span>
                        </div>

                        </div>
           </div>
           </div>




          

    
    </div>
  )
} ;

export default Selfform ;
