
// // 한 페이지에 보여줄 게시물 개수
// export let count = 10;

// export let currentPage = 1;

// // 페이지네이션 함수(출력할 리스트를 매개변수로 받음)
// export function paginate(list) {
//     console.log("페이지네이션");
//     let listLength = list.length;

//     // 페이지 번호를 표시해줄 div
//     let pageNumDiv = document.querySelector('.a-board-pagenum');

//     // 총 페이지 개수 구하는
//     let totalPage = Math.ceil(listLength / count);
//     console.log(totalPage);

//     // 페이지 개수만큼 페이지 번호 버튼 생성
//     for (let i = 1; i <= totalPage; i++) {
//         let numbtn = document.createElement('input');
//         numbtn.setAttribute("type", "radio");
//         numbtn.setAttribute("name", "pagenum");
//         // 페이지번호 버튼의 id값으로 i 설정(id=페이지번호)
//         numbtn.setAttribute("id", i);
//         numbtn.setAttribute("class", `a-numbtn numbtn-${i}`);

//         let numbtnLabel = document.createElement('label');
//         numbtnLabel.textContent = i;
//         numbtnLabel.setAttribute("for", i);
//         numbtnLabel.setAttribute("name", "pagenum");

//         // 페이지 번호를 표시해줄 div에 페이지 번호 버튼 추가
//         pageNumDiv.append(numbtn, numbtnLabel);
//     }

//     // 페이지 번호 버튼들
//     let numbtns = document.querySelectorAll('.a-numbtn');
//     numbtns.forEach(function (btn) {
//         btn.addEventListener('click', function () {
//             // 만약 배열의 마지막 요소의 인덱스보다 end가 크다면 end를 배열의 마지막요소의 인덱스로 설정
//             let i = parseInt(btn.getAttribute('id'));
//             let end = i * count - 1;
//             if (end >= listLength) {
//                 end = listLength - 1;
//             }
//             currentPage = i;
//             render((i - 1) * count, end, i);
//         });
//     });
// }

// // 이전 다음 버튼에 이벤트 추가하는 함수
// export function addBtnEvent() {

//     let nextBtn = document.querySelector("#nextBtn");
//     let prevBtn = document.querySelector("#prevBtn");

//     nextBtn.addEventListener('click', function () {
//         goNext(JSON.parse(window.localStorage.getItem("board")).length);
//     });

//     prevBtn.addEventListener('click', function () {
//         goPrev();
//     });
// }


// // 이전 버튼 눌렀을때 작동하는 함수
// export function goPrev() {
//     currentPage -= 1;

//     let start = (currentPage - 1) * count;
//     let end = currentPage * count - 1;

//     render(start, end, currentPage);
// }

// // 다음 버튼 눌렀을때 작동하는 함수
// export function goNext(listLength) {
//     currentPage += 1;

//     let start = (currentPage - 1) * count;
//     let end = currentPage * count - 1;

//     if (end >= listLength) {
//         end = listLength - 1;
//     }
//     render(start, end, currentPage);
// }



// export function pageBtnRender(listLength, pagenum) { // 페이지 이전/다음 버튼 display값 설정
//     let totalPage = Math.ceil(listLength / count);

//     let nextBtn = document.querySelector("#nextBtn");
//     let prevBtn = document.querySelector("#prevBtn");

//     // 현재 첫번째 페이지라면 이전 버튼 출력 X
//     if (pagenum == 1) {
//         prevBtn.style.display = "none";
//         nextBtn.style.display = "block";
//     }
//     // 현재 마지막 페이지라면 다음 버튼 출력 X
//     if (pagenum == totalPage) {
//         nextBtn.style.display = "none";
//         prevBtn.style.display = "block";
//     }

//     if (pagenum != 1 && pagenum != totalPage) {
//         prevBtn.style.display = "block";
//         nextBtn.style.display = "block";
//     }

//     // 현재 페이지로 체크되게
//     console.log(pagenum);
//     document.querySelector(`.numbtn-${pagenum}`).checked = "checked";
// }