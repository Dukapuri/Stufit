import '../css/section.css';

function Section() {
  return (
    <div className="Section">
        <div className='main_text'>
            <p>온라인 학습을 통한 사고력 <br/>StuFit에서 친숙하고 재미있게</p>
        </div>
        <div className='main_img'>
            <img src={`${process.env.PUBLIC_URL}/img/bg1.png`}/>
        </div>
    </div>
  );
}

export default Section;
