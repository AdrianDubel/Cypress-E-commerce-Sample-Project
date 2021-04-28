# Cypress-E-commerce-Sample-Project

![image](https://user-images.githubusercontent.com/65505707/115718711-ad603380-a37b-11eb-8135-f0306452258c.png)

## Description
Sample test automation project written with Cypress using Page Object Model and Cypress Commands. As a reporter, I also added ```mochawesome report``` to get the final report after all the tests were done. Project  written for the [automationpractice.com](http://automationpractice.com/), an e-commerce website. Covers the entire online purchasing process. So there are many connections between the server and client, many built-in validations which give you a full experience of practicing scenarios that can be found in real time projects.

I have created file with test cases and based on that I wrote my test automation scripts using Cypress.

The test cases are divided into the following categories: 
- Login&Register
- My Account
- Product Buy Flow
- Home Page

In the specified folder "Documents" you can find all test cases for this project and a sample report after all tests have been performed. 

## Installation

To run project:

```bash
- Install node.js
- npm init ( to create package.json)
- npm install cypress --save-dev
```
To generate repot:

```bash
- npm install mochawesome --save-dev
- npm install mochawesome-merge --save-dev
- npm install mochawesome-report-generator --save-dev
