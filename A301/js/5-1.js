let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sumOfEven = (arr) => {
  let sum = 0;

  arr.forEach((element) => {
    if (element % 2 === 0) {
      sum += element;
    }
  });
  return sum;
};

let sumOfOdd = (arr) => {
  let sum = 0;

  arr.forEach((element) => {
    if (element % 2 != 0) {
      sum += element;
    }
  });
  return sum;
};

let sumBetweenAAndBOfArr = (arr, a, b) => {
  arr.sort((a, b) => {
    return a - b;
  });

  console.log(arr);

  let sum = 0;

  if (arr.includes(a) === false || arr.includes(b) === false) {
    console.log(a + " or " + b + " is not exis in array");
  } else {
    for (let index = arr.indexOf(a); index <= arr.indexOf(b); index++) {
      sum += arr[index];
    }
  }

  console.log(sum);
};

//  Danh sách được chia thành hai phần (Trái - Phải) (Vẫn là cùng một mảng)
//  Phần được sắp xếp ở đầu bên trái và phần chưa được sắp xếp ở đầu bên phải
//  Lúc đầu thì phần bên phải là toàn bộ danh sách. (Vì phần bên trái chưa sắp xếp mà)
//  Mỗi lần lặp chúng ta sẽ liên tục tìm giá trị nhỏ nhất ở phần bên phải, hoán đổi vị trí của nó cho phần tử ngoài cùng bên trái.
//  Thuật toán này không phù hợp với các tập dữ liệu lớn vì độ phức tạp trung bình: O(n2)

let selectionSort = (arr) => {
  // duyệt qua từng phần tử của mảng
  for (let i = 0; i < arr.length; i++) {
    // tìm phàn tử nhỏ nhất của mảng chưa được sắp xếp (bên phải)
    let indexOfMinvalue = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMinvalue]) {
        indexOfMinvalue = j;
      }
    }
    // Hoán đổi phần tử nhỏ nhất với phần tử đầU tiên
    let temp = arr[indexOfMinvalue];
    arr[indexOfMinvalue] = arr[i];
    arr[i] = temp;
  }

  console.log(arr);
};



// so sánh hai phần tử kề nhau, nếu chúng chưa đứng đúng thứ tự thì đổi chỗ (swap).
// đẩy phần tử lớn nhất xuống dưới cùng, kết thúc nếu vòng lặp không gây ra bất kỳ sự hoán đổi nào
//  Thuật toán này không phù hợp với các tập dữ liệu lớn vì độ phức tạp trung bình: O(n2)

let bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (swapped == false) {
      break;
    }
  }

  console.log(arr);
};


// 1: Lặp lại từ arr[1] đến arr[n] trên mảng.

// 2: So sánh phần tử hiện tại (khóa) với phần tử trước của nó.

// 3: Nếu phần tử chính nhỏ hơn phần tử trước của nó, hãy so sánh nó với các phần tử trước đó. Di chuyển các phần tử lớn hơn lên một vị trí để tạo khoảng trống cho phần tử được hoán đổi.

let insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let key = arr[i];
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[[j]];
            j = j - 1;
        }
        arr[j + 1] = key
    }
    console.log(arr);
}

insertionSort([1,4,3,2,10,8,9])

