# 🗻 Mount

하나의 어플로 끝내는 MT 기획

## 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [사용기술](#-tools)<br/>
3. [배운 점](#-i-learned)<br/>
4. [진행과정](#-진행과정)<br/>

---

## 프로젝트 소개
터치 한번으로 끝내는 
EASY-한 MT기획

## 🛠 Tools
<div>
  <img src="https://img.shields.io/badge/ReactNative-0.65.1-61DAFB?style=flat&logo=react" />
  <img src="https://img.shields.io/badge/styled_components-5.3.1-DB7093?style=flat&logo=styled-components" />
  <img src="https://img.shields.io/badge/Redux-4.1.2-764ABC?style=flat&logo=Redux" />
  <img src="https://img.shields.io/badge/axios-0.24.0-EF4678?style=flat&logo=" />
  <img src="https://img.shields.io/badge/lodash-4.17.21-3492FF?style=flat&logo=Lodash" />
</div>
<div>
  <h5>dev dependencies</h5>
  <img src="https://img.shields.io/badge/Eslint-7.32.0-4B32C3?style=flat&logo=eslint" />
  <img src="https://img.shields.io/badge/miragejs-0.1.42-026664?style=flat&logo=" />
  <img src="https://img.shields.io/badge/jest-27.2.1-57BCAD?style=flat&logo=" />
</div>


## 🔎 I learned
### 전진호
- Github 이해도
  - Develop / Feature / Hotfix 등의 브랜치로 나누어 작업하는 것이 도움이 되었다. (navigation 쪽 작업하다가 화면 요소 수정하는 등의 난잡한 방식으로 작업하는 것을 방지할 수 있었음)
- Typescript의 장점
  - TS로 진행한 프로젝트가 아니지만 역설적이게도 **TS의 필요성, 유용성을 절실하게 깨달았다**. 타입 추론 기능을 제공한다는 사실은 알고 있었으나 Mount 프로젝트를 진행하기 전까지는 그다지 필요하다고 생각하지 않았다. 오히려 코드 복잡도를 증가시키거나 가독성을 해친다는 의견을 들어 부정적이라고도 생각했다. 그러나 Mount 앱의 화면 개수는 31개로, 3명의 초짜 프론트엔드 개발자끼리 진행하기에는 규모가 꽤 컸다. 초반에는 감당할 수 있는 수준이었으나, 구현한 화면의 개수가 늘어나고 부모-자식 컴포넌트의 깊이가 커질 수록 각 컴포넌트끼리 어떤 데이터가 오가는지 알아내기 힘들어졌다 (기획서에 상품을 추가하고 확인하려면 홈 화면 -> 상품 클릭 -> 수량 변경 화면 -> 기획서 선택 -> 기획서 화면의 과정을 거쳐햐 했다). 매번 작업할 때마다 console.log 찍고 주석에 적어놓고 작업하는 것은 전혀 효율적이지 않았다. 
- Redux 기초 지식
  - 기존에 이론으로만 학습한 Redux 플로우(상태를 저장하는 Store에 변경하려는 정보를 담은 Action을 Dispatch를 통해 앱의 상태를 변경하는 Reducer 함수로 전달하는 일련의 과정)를 React-Redux를 통해 reducer와 action을 정의하고 각 컴포넌트에서 `useSelector`로 Store에 접근하거나 `useDispatch`로 상태를 변경하도록 구현해보았다.
- 에러 핸들링과 테스팅의 필요성
  - 부끄럽지만 이때까지 개발 프로젝트를 진행하면서 테스팅을 적용하거나 에러 핸들링에 대해 진지하게 고려하지 않았다. 내가 쓴 코드가 완벽하게 작동할 것이라는 자만심과 테스트를 병행하면서 코드를 작성하는 것에 대한 게으름 때문이었다. 하지만 릴리즈하는 과정에서 애플리케이션을 실행하고 로그인을 하면 에러 메시지도 없이 종료되는 심각한 문제가 발생했다. 꾸준히 예외 처리를 해두거나 테스트를 해보았다면 사전에 해결할 수도 있는 문제였다. 코드는 나 혼자 작성하는 것이 아니기 때문에 어떤 문제가 발생할 지 예상할 수 없으며, 에러가 발생하더라도 사용자에게 좋은 경험을 주기 위해 에러 처리를 고려하면서 구현하고 테스팅 적용하는 것이 중요하다는 것을 깨달았다. 


## ⛓ 진행과정
### 전진호
- 프로젝트 초기 설계
  - folder structure : api, components, navigation, screen, store
  - navigation : Auth, Main, Tab, Planner, ...
  - Redux store : planners, search, users
- 화면 구현
  - Home(Main, FoodDetail, RecDetail, Tutorial), Search, Favorite, MyPage, Plan, PlanEditor
  - 상품 상세 화면(Detail)에서 기획서(Planner)로 상품 정보를 전달하는 로직 구현

---

