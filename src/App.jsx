import "./App.css";

export default function App() { //React 컴포넌트를 내보내는 코드
  return (
    <div>
    <header className="header">
        <h1>My Profile</h1>
        <p>나만의 웹사이트를 만들어봐요!</p>
    </header>

    <nav className="nav">
        <ul>
            <li><a href="#about">자기소개</a></li>
            <li><a href="#features">관심사</a></li>
            <li><a href="#contact">연락하기</a></li>
            <li><a href="https://skulikelion.com" target="_blank">멋사 사이트 바로가기</a></li>
        </ul>
    </nav>

    <main className="main">
        <section id="about" className="section">
            <h2>안녕하세요!</h2>
            <p>만나서 반갑습니다! 저는 미래융합학부1 재학중인 25학번 오유림입니다!</p>
            <p>열심히 공부중이니, 최선을 다해 힘이 되겠습니다!</p>
            <img 
            className="img" 
            src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/eViY/image/is3UFbmo7Gwuiln43EznmVZFwXo.jpg" 
            alt="about_image"/>
        </section>

        <section id="features" className="section">
            <h2>관심사</h2>
            
            <h3>취미</h3>
            <ul>
                <li>먹방 보기</li>
                <li>음악 듣기</li>
                <li>계획세우기</li>
                <li>코딩 하기기</li>
            </ul>
            <img 
            className="img" 
            src="https://i.ytimg.com/vi/dIt_N7yNTgk/mqdefault.jpg" 
            alt="guitar_image"/>

            <h3>좋아하는 음식 순위</h3>
            <ol>
                <li>마라탕</li>
                <li>노브랜드버거</li>
                <li>파리바게트 빵</li>
            </ol>
            <img 
            className="img" 
            src="https://i.pinimg.com/474x/7a/9e/ec/7a9eec73158b3e0a84691551180fef8e.jpg" 
            alt="hamburger_image"/>
        </section>

        <section id="contact" className="section">
            <h2>연락하기</h2>
            <p>이메일: ulim006@skuniv.ac.kr</p>
            <p>전화번호: 010-8837-32250</p>
        </section>
    </main>

    <footer className="footer">
        <p>© 2025. SKU LIKELION. All rights reserved.</p>
    </footer>
    </div>
  );
}