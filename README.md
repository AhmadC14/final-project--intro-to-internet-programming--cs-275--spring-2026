# Spring 2026 Intro to Internet Programming — Final Project

☞ **Plagiarism in any form will result in failing the entire course. You’ve been duly warned.** ☜

* **Do not start this project until you have read these instructions carefully.**
* **Read these instructions repeatedly until you understand, then begin your project. If something is not clear, ask.**

---

## ❖ Instructions ❖

In this assignment, you’ll be writing two programs.

### Program 1 (diamond)

For the first one, you’ll write a program that accepts user input as an integer, then creates a diamond whose width (in columns) and height (in rows) are determined by that input. For example, if the user enters 5, the diamond will be 5 rows tall and 5 columns wide.

**Note**: Odd and even versions of the diamond are rendered differently.

Here are two examples of the output, one for an even situation, the other for an odd.

```bash
Enter a number
8
        *
       * *
     * * * *
   * * * * * *
 * * * * * * * *
   * * * * * *
     * * * *
       * *
        *

Enter a number
5
  *
 ***
*****
 ***
  *
```

**Carry out the logic of this program in a single for loop.**

### Program 2 (array flipper)

For the second program, you’ll render a matrix whose size is dictated by user input, based on the following rules:

1. Requests from the user a positive number representing the size of a matrix.
2. Prints a matrix consisting of `0`s.
3. Populates the matrix with values from `1` to `(input × input)`.
4. Prints the matrix with the newly-populated values.
5. Swaps the contents of the matrix on one side of the diagonal formed from top right to bottom left with the other side, highlighting the elements along the diagonal and leaving them un-touched/un-swapped.
6. Prints the flipped matrix.

As mentioned in item 5, the elements in the diagonal **must not be touched**, while the other elements in the matrix **must be swapped**. The numbers in every cell of the matrix are arbitrary; each cell could have contained a letter, string, image, or other object/primitive. Numbers are being used in this assignment because they produce a sequence that is easy to follow when working with the matrix.

Here are two examples of the output, one for an even situation, the other for an odd.

```bash
Please enter the size of your matrix: 4

Your matrix is 4 × 4

Printing matrix with default values:
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0

Populating matrix...matrix populated

Printing matrix:
1   2   3   4
5   6   7   8
9   10  11  12
13  14  15  16

Flipping matrix...matrix flipped

Printing flipped matrix:
16  15  14  4
12  11  7   9
8   10  6   5
13  3   2   1

Please enter the size of your matrix: 3

Your matrix is 3 × 3

Printing matrix with default values:
0 0 0
0 0 0
0 0 0

Populating matrix...matrix populated

Printing matrix:
1 2 3
4 5 6
7 8 9

Flipping matrix...matrix flipped

Printing flipped matrix:
9 8 3
6 5 4
7 2 1
```

**Like the first program, carry out the logic for the program using a single loop.**

---

## ❖ Rules for Both Programs ❖

1. Input should come from `windows.prompt()`.
2. You must implement both programs using JavaScript `modules`.
3. The various `.gitignore` files throughout this project’s scaffold don’t allow any files into this repo. *Edit each .gitignore file to only allow what is required for your program to run.*
4. Each of the two programs must be loaded via a file called `index.html` in the root of each folder, `array-flipper` and `matrix`.
5. You are encouraged to use Gulp to create each of these programs.
6. Format code according to conventions for HTML, CSS, and JavaScript, as discussed in class all semester.
7. Implement rest parameters, default parameters, `let`, `const`, fat arrow functions, string templates, spread operators, and other ES6 concepts wherever possible in favor of ES5 equivalents.

---

## ❖・Due・❖

Tuesday, 12 May 2026, at 9:59 PM

---

## ❖・Grading・❖

| Item                                         | Points |
|----------------------------------------------|--------|
| *Overall code quality*                       |  `25`  |
| *`array-flipper` implemented corectly*       |  `25`  |
| *`matrix` implemented correctly*             |  `25`  |
| *Assignment instructions followed correctly* |  `25`  |

---

## ❖・Submission・❖

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.

You will need to issue a pull request back into the original repo, the one from which your fork was created for this project. See the **Issuing Pull Requests** section of [this site](http://code-warrior.github.io/tutorials/git/github/index.html) for help on how to submit your assignment.
