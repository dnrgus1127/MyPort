# 보여줄 수 있는 것들

- 스켈레톤 UI
- 로딩
- redux
- react query
- typescript

리덕스 적용하기

- 슬라이더 description 첫 딜레이만 길고 이후에는 짧게

10/31

- 깃허브 연동해서 프로젝트 정보 가져오는 중

# 디렉터리 구조

```dir

```

#

헤더가 100vh였다가 스크롤 하면서 작아지도록, daily portfolio가 중앙에 있다가 사라지도록
마크다운 적용하기

# 사용 라이브러리

- react-router-dom
- lodash
- react-markdown (+ remark-gfm)
- react-syntax-highlighter

# 11 / 2

- Cover 애니메이션 적용
- 마크다운 적용
- react-markdown, react-syntax-highlighter 적용

## 해야할 것

- 마크다운 이미지 태그 처리
- 마크다운 CSS

# 11 / 7

- 프로젝트 슬라이더 기능 추가
  - 무한 슬라이딩 적용
- 슬라이더 Description 애니메이션 적용

# 11 / 8

- 슬라이드 Descrition Fade in 애니메이션 적용 마무리
- 프로젝트 데이터 추가 (Repository type 정의)

- 부자연스러운 슬라이딩 FIX

## 추가 요소

- blog Post 리스트에서 PostItem의 topic 클릭 시 "/"로 나눈 첫 토픽 뿐만 아니라 / 여러개로 나눠져 있어도 검색 가능하게 하기
  - react router의 \* 선택자 이용하면 가능할 것 같다.

## 개발 하면서 막 적은

## BlogPage

### MainPage

- PageAnimation이 적용될 때는 animation delay가 적절하지만, PostPage에서 이전으로 돌아갈 떄는 컨텐츠에 접근하기 까지 쓸모없는 시간이 낭비된다는 느낌이 들었다.
  - pageAnimation이 적용될 때만 delay를 적용하는 방법을 생각해보자.

### PostPage

- 아무래도 글이다 보니 가독성을 위해서 Project Description 보다 글 사이의 간격을 기게 하였음
- 일부 포스트 (ex : 배경 이미지와 ~)에서 github 404에러가 발생함.
  - 한글은, -, ~ 특수문자에선 일단 문제가 없었고 경로에 "/"도 포함되지 않았음.
  - 제목 길이가 길어서 그런지 확인할 필요가 있음
  - react route 이동하면서 ?가 짤려서 발생하는 문제!
