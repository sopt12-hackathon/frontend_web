# 🏃‍♀️🏃‍♂️ 헬린2분
![헬린2분]()

> 헬린2분,
> 침대 중독에서 운동 중독으로! 핫바디가 되고 싶은 당신을 위한 막간 홈트레이닝 추천 서비스

## 🎁 서비스 핵심기능
#### ⚽ 메인 페이지
+ 홈트레이닝 영상의 길이를 선택할 수 있음 *(2, 5, 10, 15분)*

#### 🎳 영상 페이지
+ 선택한 시간에 맞는 영상을 랜덤으로 자동 재생
+ 영상을 다시 추천받거나 종료할 수 있음
+ 영상에 대한 좋아요/싫어요 수집
+ 영상 재생을 완료했을 경우:
    + 종료
    + 영상 재추천
+ 비로그인 상태일 경우:
    + 로그인/회원가입 모달

#### 🏓 로그인 페이지
+ 이메일 주소, 비밀번호로 로그인

#### 🏑 회원가입 페이지
+ 이름, 이메일 주소, 비밀번호로 회원가입

#### 🤿 마이 페이지
+ 이름과 뱃지 표시
+ 총 운동 시간과 주간 운동 시간 그래프 표시
+ 뱃지 획득 현황 표시

## 💻 개발 담당 부분
#### **권소희**
+ 메인 페이지 (Input)
    > 시간 배열 길이에 따라서 시간 블록을 동적으로 생성
    > 시간 블록을 클릭하면 해당 시간을 받아서 고차컴포넌트`withRouter`와 `history.push()`를 통해 해당하는 영상 페이지로 연결
+ 로그인/회원가입 페이지
    > `useState`를 통해 input 동적으로 받아오기
    > 로그인/회원가입 컴포넌트를 `src/containers/my/SignForm.js`에서 한 번에 관리
+ README 문서 작성
+ 로그인/회원가입 페이지 스타일링
+ 영상 페이지 css 간격 조정

#### **이동훈**
+ 마이 페이지 (Mypage)
    > 서버에서 결과 가져오기
    > 그래프 구현
    > redux, redux-saga 이용
+ 메인 페이지, 마이페이지 스타일링

#### **현주희**
+ 동영상 재생 페이지 (Result)
    > 서버에서 영상 url, title, hashtag 받아오기
    > youtube 동영상 iframe으로 연결
    > redux, redux-saga 이용해서 state 관리
+ 로그인/회원가입 페이지
    > 서버 통신


## ⚒ 사용한 모듈
```
    "axios": "^0.21.0",
    "chart.js": "^2.9.4",
    "immer": "^8.0.0",
    "quill": "^1.3.7",
    "react-chartjs-2": "^2.11.1",
    "react-helmet-async": "^1.0.7",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.2.0",
    "redux": "^4.0.5",
    "redux-actions": "^2.6.5",
    "redux-devtools-extension": "^2.13.8",
    "redux-saga": "^1.1.3",
    "styled-components": "^5.2.1",
    "styled-reset": "^4.3.1",
```
