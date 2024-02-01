
import api from "./js/apiCaller.js";

let idClasses = null;
let idGradeClass = null;
let idCate = null;
document.addEventListener("DOMContentLoaded", async () => {
  const addClassesButton = document.getElementById("addClassesButton");
  const deleteClassesButton = document.getElementById("deleteClassesButton");
  const editClassesButton = document.getElementById("editClassesButton");
  addClassesButton.addEventListener("click", addClassesToAPI);
  editClassesButton.addEventListener("click", saveEditClasses);
  deleteClassesButton.addEventListener("click", deleteClasses);

  const addGradesButton = document.getElementById("addGradesButton");
  const editGradesButton = document.getElementById("editGradesButton");
  const deleteGradesButton = document.getElementById("deleteGradesButton");
  addGradesButton.addEventListener("click", addGradesToAPI);
  editGradesButton.addEventListener("click", saveEditGrades);
  deleteGradesButton.addEventListener("click", deleteGrades);

  await displayClasses();
  await displayGrades();
});

const displayClasses = async () => {
  try {
    const classes = await api.getClasses();
    console.log(classes);
    const chooseClass = document.getElementById("editClassesName");
    chooseClass.innerHTML = "<option>Chọn lớp</option>";
    classes?.forEach((element) => {
      const optionElement = document.createElement("option");
      optionElement.value = element.id;
      optionElement.textContent = element.name;
      chooseClass.appendChild(optionElement);
    });

    chooseClass.addEventListener("change", async function () {
      idClasses = this[this.selectedIndex].value;

      const infoClass = await api.getOneClass(this[this.selectedIndex].value);
      document.getElementById("newTotalStudents").value =
        infoClass.totalStudents;
      document.getElementById("chooseGrades").value = infoClass.grade;
    });
  } catch (error) {
    console.error("Error displaying classes:", error);
  }
};

const displayGrades = async () => {
  try {
    const categories = await api.getGrades();

    const gradesName = document.getElementById("editGradesName");
    const classesGrades = document.getElementById("classesGrades");
    const chooseGrades = document.getElementById("chooseGrades");
    gradesName.innerHTML = "<option>Chọn khối</option>";
    classesGrades.innerHTML = "<option>Chọn khối</option>";
    chooseGrades.innerHTML = "<ption>ption>";
    categories.forEach((classes) => {
      const optionElement = document.createElement("option");
      const optionElement1 = document.createElement("option");
      const optionElement2 = document.createElement("option");
      optionElement.value = classes.id;
      optionElement1.value = classes.id;
      optionElement2.value = classes.id;
      optionElement.textContent = classes.name;
      optionElement1.textContent = classes.name;
      optionElement2.textContent = classes.name;
      gradesName.appendChild(optionElement);
      classesGrades.appendChild(optionElement1);
      chooseGrades.appendChild(optionElement2);
    });
    gradesName.addEventListener("change", function () {
      document.getElementById("newGradesName").value =
        this[this.selectedIndex].textContent.trim();
      idCate = this[this.selectedIndex].value;
    });
    document
      .getElementById("classesGrades")
      .addEventListener("change", function () {
        idGradeClass = this[this.selectedIndex].value;
      });
    document
      .getElementById("chooseGrades")
      .addEventListener("change", async function () {
        const classes = await api.getQueryClass({
          grade: this[this.selectedIndex].value,
        });
        console.log(classes);
        classes.forEach((classes) => {
          const optionElement = document.createElement("option");
          optionElement.value = classes.id;
          optionElement.textContent = classes.name;
        });
      });
  } catch (error) {
    console.error("Error displaying categories:", error);
  }
};

const addClassesToAPI = async () => {
  const gradeName = document.getElementById("classesName");
  const totalStudents = document.getElementById("totalStudents");

  const newClasses = {
    name: gradeName.value,
    grade: idGradeClass,
    totalStudents: totalStudents.value,
  };

  try {
    await api.addClasses(newClasses);
    await displayClasses();
    gradeName.value = "";
    totalStudents.value = "";
  } catch (error) {
    console.error("Error adding classes:", error);
  }
};

const addGradesToAPI = async () => {
  const gradeName = document.getElementById("gradeName");

  const newGrades = {
    name: gradeName.value,
  };

  try {
    await api.addGrades(newGrades);
    await displayGrades();
  } catch (error) {
    console.error("Error adding grade:", error);
  }
};

const saveEditClasses = async () => {
  const totalStudents = document.getElementById("newTotalStudents");

  const updatedClasses = {
    totalStudents: totalStudents.value,
  };

  try {
    await api.editClasses(idClasses, updatedClasses);
    await displayClasses()
    totalStudents.value = ""
  } catch (error) {
    console.error("Error editing classes:", error);
  }
  // Đóng modal sau khi lưu sửa đổi
};

const deleteClasses = async () => {
  try {
    await api.deleteClasses(idClasses);
    await displayClasses();
    document.getElementById("newTotalStudents").value = "";
  } catch (error) {
    console.error("Error deleting grade:", error);
  }
};

const saveEditGrades = async (e) => {
  e.preventDefault();
  const updatedGradesName = document.getElementById("newGradesName").value;

  const updatedGrades = {
    name: updatedGradesName,
  };

  try {
    await api.editGrades(idCate, updatedGrades);
    await displayGrades();
    document.getElementById("newGradesName").value = "";
  } catch (error) {}

  // Đóng modal sau khi lưu sửa đổi
};

const deleteGrades = async () => {
  // Gán thuộc tính data-grade-id cho nút Delete để biết được danh mục cần xóa
  try {
    await api.deleteGrades(idCate);
    await displayGrades();
    document.getElementById("newGradesName").value = "";
  } catch (error) {
    console.error("Error deleting grade:", error);
  }
};