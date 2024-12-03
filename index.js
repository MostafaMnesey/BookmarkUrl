var allBookmarks = [];
var nameRegex=/^\w{3,15}$/
var urlRegex=/^(http|https):\/\/www\.[a-z0-9]+\.com$/

allBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
displayBookmarks();
function addBookmark() {
  if(validateall()){
  
        var bookMark = {
      siteName: siteName.value,
      siteUrl: siteUrl.value,
    };
    allBookmarks.push(bookMark);
    localStorage.setItem("bookmarks", JSON.stringify(allBookmarks));
    displayBookmarks();
    clearForm();
    Swal.fire({
      position: "center center",
      icon: "success",
      title: "Bookmark Was Added",
      showConfirmButton: false,
      timer: 1500
    });
  function clearForm() {
    siteName.value = null;
    siteUrl.value = null;
  }}
  else{


    Swal.fire({
      icon: "error",
      title: "Disabled",
      text: `Site name must contain at least 5 characters and Site URL must be a valid one"`


    });

  }}
  
function displayBookmarks() {
  var cartona = ``;
  for (var i = 0; i < allBookmarks.length; i++) {
    cartona += `
         <tr>
              <th scope="row">${i + 1}</th>
              <td>${allBookmarks[i].siteName}</td>
              <td>${allBookmarks[i].siteUrl}</td>
              <td>  <a href="${allBookmarks[i].siteUrl}" target="_blank" ><button type="button" class="btn btn-outline-secondary"><i class="fa-solid fa-eye"></i> visit </button></a></td>       
              <td><button type="button" onclick="deleteBookmark(${i})" class="btn btn-outline-danger">Delete</button></td>
         </tr>`;
  }
  bookmarks.innerHTML = cartona;
}

function deleteBookmark(index) {
  allBookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(allBookmarks));
  displayBookmarks();
}


function validate(regex,input,value){
  if(regex.test(value)){
    input.classList.replace("is-invalid","is-valid");
    return true
  }
  else{
    input.classList.add("is-invalid");
    return false
  }
}


function validateall(){
if(validate(nameRegex,siteName,siteName.value) && validate(urlRegex,siteUrl,siteUrl.value)){
  submit.classList.remove("disabled");
  return true
}
else{
  submit.classList.add("disabled");
return false
}

}