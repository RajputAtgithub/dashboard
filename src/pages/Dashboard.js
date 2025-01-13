import React from 'react';
import CardComponent  from '../components/CardComponent';
import ResultComponet from '../components/ResultComponet';
// import { AiOutlineDashboard } from 'react-icons/ai';
import {  BiChevronDownSquare } from "react-icons/bi";
import './dashboard.css';
import sampleImage from '.././assets/images/sampleImage.png';
import { ReactComponent as Avatar } from '.././assets/images/avatar.svg'
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { TbDeviceWatchExclamation,TbFileSymlink } from "react-icons/tb";
import { RiInformation2Line } from "react-icons/ri";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FiArrowUp } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
// import CompareAccuracy from '../components/CompareAccuracy/CompareAccuracy';
import AccuracyComparison from './AccuracyComparison';
import TimeTaken from './TimeTaken';

function Dashboard () {
  return (
    <>
                <ResultComponet style={{width:'370px',height:'950px',justifyContnet:'center',alignItems:'center',margin:'0',marginLeft:'10px'}}>
            <img src={sampleImage} alt="Sample" style={{ width: '150px', height:'auto',borderRadius: '8px' }} />
            <h2 style={{color:'#5b60af'}}>Your Result !</h2>
            <h6>All your insights & detail in one place.</h6>
        <div style={{ display: 'block', flexDirection:'column',justifyContnet:'center', alignItems: 'center'}}>

          <CardComponent style={{height:'460px',width:'300px'}}>
          <ResultComponet style={{display:'block',width:'227px',height:'100px'}}>
            <div style={{display:'flex'}}>
                <div>
            <HiOutlineClipboardCheck style={{ color:'#6c6a6a',fontSize: '40px', marginRight: '1px',marginTop:'10px' ,backgroundColor:'#dbd9f5',borderRadius:'10px'}} />
            </div>
            <div><p style={{color:'white',backgroundColor:'#5b60af',borderRadius:'15px',fontSize:'12px',padding:'5px'}}>You've Passed</p><p><span style={{color:'black',fontWeight:'900'}}>136</span> / 240</p></div>
            <div style={{fontSize:'4rem',fontWeight:'100',color:'grey'}}>|</div>
            <div ><p style={{color:'white',backgroundColor:'#0b998a'}}>76 %</p><p style={{color:'#0b998a'}}>Accuracy</p></div>
            </div>
          </ResultComponet>
          <ResultComponet style={{display:'block',width:'227px',height:'130px'}}>
            <div style={{display:'flex'}}>
                <div>
            {/* <HiOutlineClipboardCheck style={{ color:'#6c6a6a',fontSize: '40px', marginRight: '1px',marginTop:'10px' ,backgroundColor:'#dbd9f5',borderRadius:'10px'}} /> */}
            <Avatar style={{width:'90px',height:'auto'}}/>
            </div>
            <div><p style={{color:'#5b60af',borderRadius:'15px',fontSize:'12px',padding:'5px'}}>Top Score</p><p><span style={{color:'black',fontWeight:'900'}}>230</span> <span style={{color:'grey'}}>/ 240</span></p></div>
            
           
            </div>
            <hr/>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}><p style={{fontSize:'12px'}}>By <strong>Parth Attotkar</strong></p><p style={{color:'white',borderRadius:'15px',backgroundColor:'#0b998a',fontSize:'10px',padding:'5px'}}>92 % Accuracy</p></div>
          </ResultComponet>
          <h3>Improve your marks</h3>
          <span>Improve your score by practicing more.</span>
          <button style={{color:'white',marginTop:'10px',backgroundColor:'#5b60af',borderRadius:'5px',padding:'5px',width:'100%',border:'0.2px solid'}}>Practice more</button>
          </CardComponent>
          <CardComponent style={{height:'190px',width:'300px',marginTop:'0'}}>
            <h3>Revisit Paper</h3>
            <span>Change your frields by simply sharing a link to this test.</span>
            <button  style={{color:'white',marginTop:'10px',backgroundColor:'#5b60af',borderRadius:'5px',padding:'5px',width:'100%',border:'0.2px solid'}}><TbFileSymlink style={{marginRight:'3px'}}/>Visit</button>
            <p><RiInformation2Line/> Instuctions for how to upload your handwritten material in given.</p>
            </CardComponent>
        </div>
      </ResultComponet>
    <div className="dashboard">

  
      <CardComponent>
        <div style={{ display: 'flex', alignItems: 'center' ,width:'20vw',color:'#9ca3af' }}>
          <BiChevronDownSquare style={{ fontSize: '24px', marginRight: '12px' }} />
          <h3>Compare Accuracy</h3>
        </div>
      </CardComponent>
      <CardComponent>
        <div style={{ display: 'flex', alignItems: 'center' ,width:'20vw',color:'#9ca3af'  }}>
          <BiChevronDownSquare style={{ fontSize: '24px', marginRight: '12px' }} />
          <h3>Compare Accuracy</h3>
        </div>
      </CardComponent>
      <CardComponent>
        <div style={{ display: 'flex', alignItems: 'center' ,width:'20vw',color:'#9ca3af'  }}>
          <BiChevronDownSquare style={{ fontSize: '24px', marginRight: '12px' }} />
          <h3>Compare Accuracy</h3>
        </div>
      </CardComponent>
            <CardComponent style={{width:'250px'}}>
        <div style={{  flexDirection:'column',alignItems: 'center' ,width:'17vw'}}>
          <FaArrowUpRightDots style={{ fontSize: '24px', marginRight: '12px',color:'#9ca3af'  }} />
          <strong style={{color:'#9ca3af' }}>Improvements</strong>
          <div style={{display:'flex',flexWrap:'wrap'}}>
          <p style={{color:'white',borderRadius:'14px',backgroundColor:'#20bbaf',fontSize:'13px',padding:'3px',marginRight:'2px'}}>Geography</p>
          <p style={{color:'white',borderRadius:'14px',backgroundColor:'#e7b301',fontSize:'13px',padding:'3px',marginRight:'2px'}}>Politics</p>
          <p style={{color:'white',borderRadius:'14px',backgroundColor:'#20bbaf',fontSize:'13px',padding:'3px',marginRight:'2px'}}>Current Affairs</p>
          <p style={{color:'white',borderRadius:'14px',backgroundColor:'#ba1a0b',fontSize:'13px',padding:'3px',marginRight:'2px'}}>General Studies</p>
          <p style={{color:'white',borderRadius:'14px',backgroundColor:'#20bbaf',fontSize:'13px',padding:'3px',marginRight:'2px'}}>Mathematics</p>
          <p style={{color:'white',borderRadius:'14px',backgroundColor:'#c5cbcd',fontSize:'13px',padding:'3px',marginRight:'2px'}}>Social Studies</p>
          <p style={{color:'white',borderRadius:'14px',backgroundColor:'#ba1a0b',fontSize:'13px',padding:'3px',marginRight:'2px'}}>English Literature</p>
          <p style={{color:'white',borderRadius:'14px',backgroundColor:'#e7b301',fontSize:'13px',padding:'3px',marginRight:'2px'}}>Indian History</p>
          <p style={{color:'white',borderRadius:'14px',backgroundColor:'#20bbaf',fontSize:'13px',padding:'3px',marginRight:'2px'}}>Economics</p>
                 
</div>
        </div>
      </CardComponent>
      <CardComponent style={{height:'208px'}}>
        <div style={{  flexDirection:'column',alignItems: 'center' ,width:'15vw'}}>
          <TbDeviceWatchExclamation style={{ fontSize: '24px', marginRight: '12px',color:'#9ca3af'  }} />
          <strong style={{color:'#9ca3af' }}>Response Time</strong>
          <p style={{color:'white',backgroundColor:'#5b60af',display:'inline-block'}}>Std Time 2-min</p>
          <p>60 % Answer Took<FiArrowUp style={{ fontSize: '24px', marginRight: '12px',color:'red' }}/> 2min</p>
          <hr style={{width:'100%'}}></hr>
          <p>You Are <span style={{color:'red'}}>Slow</span> !</p>
        </div>
      </CardComponent>
      <CardComponent style={{height:'208px',width:'225px'}}>
        <div style={{ flexDirection:'column',alignItems: 'center' }}>
          <FaArrowUpRightDots style={{ fontSize: '24px', marginRight: '12px',color:'#9ca3af'  }} />
        <strong style={{color:'#9ca3af' }}>Approch Data</strong>
          <p style={{textAlign:'justify',border:'1px solid #5b60af',borderRadius:'2px',}}><strong style={{color:'#5b60af',backgroundColor:'#d0cbee'}}>25%</strong> Based On <strong style={{color:'#5b60af'}}>Facts</strong></p>
          <p style={{textAlign:'justify',border:'1px solid #5b60af',borderRadius:'2px',}}><strong style={{color:'#5b60af',backgroundColor:'#d0cbee'}}>32%</strong> Based On <strong style={{color:'#5b60af'}}>Analysis</strong></p>
          <p style={{textAlign:'justify',border:'1px solid #5b60af',borderRadius:'2px',}}><strong style={{color:'#5b60af',backgroundColor:'#d0cbee'}}>19%</strong> Based On <strong style={{color:'#5b60af',paddingRight:'2px'}}>Elimination</strong></p>
          <p style={{textAlign:'justify',border:'1px solid #5b60af',borderRadius:'2px',}}><strong style={{color:'#5b60af',backgroundColor:'#d0cbee'}}>24%</strong> Based On <strong style={{color:'#5b60af'}}>Guess</strong></p>
        </div>
      </CardComponent>
      <CardComponent style={{height:'208px'}}>
        <div style={{  flexDirection:'column',alignItems: 'center' ,width:'15vw'}}>
          <BsStars style={{ fontSize: '24px', marginRight: '12px',color:'#9ca3af'  }} />
          <strong style={{color:'#9ca3af' }}>Suggetions</strong>
          <div style={{display:'flex'}}>
          <div>
            <p style={{color:'white',backgroundColor:'#5b60af',fontSize:'14px',display:'inline-block',marginRight:'3px'}}>Q1-Q12</p>
          <p style={{backgroundColor:'#d0cbee',padding:'10px',border:'2px dotted #f7f6fd'}}><b>40</b> Sec</p>
          <p style={{color:'#20bbaf',fontWeight:'600'}}>Easy</p>
          </div>
          <div>
            <p style={{color:'white',backgroundColor:'#5b60af',fontSize:'14px',display:'inline-block',marginRight:'3px'}}>Q13-Q32</p>
          <p style={{backgroundColor:'#d0cbee',padding:'10px',border:'2px dotted #f7f6fd'}}><b>1.5</b> Min</p>
          <p style={{color:'#e7b301',fontWeight:'600'}}>Medium</p>
          </div>
          <div>
            <p style={{color:'white',backgroundColor:'#5b60af',fontSize:'14px',display:'inline-block',marginRight:'3px'}}>Q33-Q40</p>
          <p style={{backgroundColor:'#d0cbee',padding:'10px',border:'2px dotted #f7f6fd'}}><b>3</b> Min</p>
          <p style={{color:'#ba1a0b',fontWeight:'600'}}>Hard</p>
          </div>          
</div>
        </div>
      </CardComponent>
      <CardComponent style={{height:'452px'}}><AccuracyComparison></AccuracyComparison></CardComponent>
      <CardComponent style={{height:'450px',width:'492px'}}><TimeTaken></TimeTaken></CardComponent>


      {/* Add more CardComponents as needed */}
    </div>
    </>
  );
};

export default Dashboard;
