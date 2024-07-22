---
sidebar_position: 1
---

# [ㅍㄴㅅㄹ] 게시글 업데이트 - 이미지 업로드 오류 해결


### 문제 상황 

- 게시글 수정 시 이미지, 제목, 내용 수정이 필수가 아님에도 불구하고  제목만 수정하고 버튼 클릭 했을 때  이미지 값이 ```h``` 로 변경됨 확인
- 그로 인해 제목만 업데이트 했을 때 기존 이미지 사라짐

<br />

### 트러블 원인 추론

```jsx
  // 기존 이미지 url
  let imageUrl = currentData?.photoURL; 


  if (image && image.length > 0) {
    const imageFile = image[0];
    console.log("Upload Image file:", imageFile); // h가 들어옴

    imageUrl = await uploadImage(user?.uid || "", imageFile, imageUrl);
  }
```
- 이미지 수정을 하지 않으면 기존 있었던 이미지를 값으로 넘기는 것으로 로직 구성
- console.log 로 수정 버튼 클릭했을 때, image[0] 값이  image url의 [0]번째 값 ```h```라는 것을 알게됨



<br />

### 해결 방법

```jsx
 if (image && image.length > 0 && image[0] instanceof File) { ... }
```

- if 조건문에 ```instanceof``` 추가
- instanceof : 객체가 특정 클래스에 속하는지 아닌지를 확인
- 이미지를 업데이트 했을 때 url 값이 File에 속하는지 조건 추가
- title 이나 content만 수정해도 기존 업로드 했던 이미지 유지

