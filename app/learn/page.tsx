"use client";

import { useEffect, useMemo, useState } from "react";
import jsPDF from "jspdf";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
};

type Lesson = {
  id: number;
  title: string;
  content: string[];
  keyPoints: string[];
  example: string;
};

type Module = {
  id: number;
  title: string;
  lessons: Lesson[];
};

const modules: Module[] = [
  {
    id: 1,
    title: "Software Testing Fundamentals",
    lessons: [
      {
        id: 1,
        title: "Introduction to Software Testing",
        content: [
          "Software Testing is the process of evaluating and verifying that a software product or application does what it is expected to do.",
          "The main goal of testing is to identify defects, improve software quality and provide confidence before the product reaches the end user.",
          "Testing is not only about finding bugs. It also helps teams understand product risks, validate requirements and deliver a better user experience.",
        ],
        keyPoints: [
          "Testing verifies whether software meets specified requirements.",
          "Testing helps identify defects before production.",
          "Testing improves product quality and reliability.",
          "Testing is performed throughout the software development lifecycle.",
        ],
        example:
          "Example: If an application has a Login feature, a tester checks valid login, invalid password, empty fields, locked accounts and other expected behaviours.",
      },

      {
        id: 2,
        title: "SDLC & STLC",
        content: [
          "SDLC stands for Software Development Life Cycle. It defines the overall process followed to plan, develop, test and maintain software.",
          "STLC stands for Software Testing Life Cycle. It focuses specifically on testing activities performed during the software lifecycle.",
          "Understanding SDLC and STLC helps testers understand when testing activities should begin and how testing fits into the complete development process.",
        ],
        keyPoints: [
          "SDLC covers the complete software development process.",
          "STLC focuses on software testing activities.",
          "Testing should start as early as possible.",
          "Requirement analysis is an important testing activity.",
        ],
        example:
          "Example: During requirement analysis, testers can identify unclear requirements and prepare questions before development starts.",
      },

      {
        id: 3,
        title: "Testing Principles",
        content: [
          "Software testing follows a number of important principles that help testers plan and execute effective testing.",
          "Testing shows the presence of defects, not their complete absence. Even after extensive testing, some defects may remain.",
          "Exhaustive testing is generally impossible. Therefore, testers use risk-based and priority-based approaches.",
        ],
        keyPoints: [
          "Testing shows presence of defects.",
          "Exhaustive testing is impossible.",
          "Early testing saves time and cost.",
          "Defects tend to cluster in certain areas.",
          "Testing is context dependent.",
        ],
        example:
          "Example: Instead of testing every possible input combination, a tester prioritizes high-risk scenarios and important business flows.",
      },

      {
        id: 4,
        title: "Verification & Validation",
        content: [
          "Verification focuses on checking whether the product is being built correctly according to specified requirements.",
          "Validation focuses on checking whether the right product has been built for the user's needs.",
          "Both verification and validation are important for delivering quality software.",
        ],
        keyPoints: [
          "Verification: Are we building the product right?",
          "Validation: Are we building the right product?",
          "Reviews and inspections support verification.",
          "Executing software and checking behaviour supports validation.",
        ],
        example:
          "Example: Reviewing a requirement document is verification. Executing the application and checking whether the login works as expected is validation.",
      },

      {
        id: 5,
        title: "Testing Levels",
        content: [
          "Testing levels represent different stages at which software can be tested.",
          "Common testing levels include Unit Testing, Integration Testing, System Testing and Acceptance Testing.",
          "Each level focuses on a different scope of the application.",
        ],
        keyPoints: [
          "Unit Testing",
          "Integration Testing",
          "System Testing",
          "Acceptance Testing",
        ],
        example:
          "Example: Testing a login method individually can be unit testing, while testing login together with database and authentication services can be integration testing.",
      },

      {
        id: 6,
        title: "Testing Types",
        content: [
          "Testing types describe different approaches used to evaluate software quality.",
          "Functional testing verifies what the system does, while non-functional testing evaluates characteristics such as performance, usability and security.",
          "Different testing types are selected depending on project requirements and risks.",
        ],
        keyPoints: [
          "Functional Testing",
          "Non-functional Testing",
          "Regression Testing",
          "Smoke Testing",
          "Sanity Testing",
          "Exploratory Testing",
        ],
        example:
          "Example: After a new feature is added, regression testing can be performed to ensure existing functionality has not been broken.",
      },

      {
        id: 7,
        title: "Test Scenario & Test Case",
        content: [
          "A test scenario is a high-level statement describing what needs to be tested.",
          "A test case contains detailed steps, test data, expected result and other information required to execute a specific test.",
          "Good test cases should be clear, maintainable and traceable to requirements.",
        ],
        keyPoints: [
          "Scenario = high-level testing condition.",
          "Test case = detailed executable test.",
          "Include expected and actual results.",
          "Use clear and meaningful test data.",
        ],
        example:
          "Scenario: Verify Login functionality. Test Case: Enter valid username and password → click Login → verify that the user is redirected to the dashboard.",
      },

      {
        id: 8,
        title: "Defect Life Cycle",
        content: [
          "The Defect Life Cycle describes the different states through which a defect moves from identification to closure.",
          "The exact states may differ between organizations and projects.",
          "A typical defect can move through states such as New, Assigned, Open, Fixed, Retest, Reopen and Closed.",
        ],
        keyPoints: [
          "New",
          "Assigned",
          "Open",
          "Fixed",
          "Retest",
          "Reopen",
          "Closed",
        ],
        example:
          "Example: A tester reports a login defect → developer fixes it → tester retests it → if the issue is resolved, the defect is closed.",
      },
    ],
  },

  {
    id: 2,
    title: "Test Case Design & Bug Reporting",
    lessons: [
      {
        id: 9,
        title: "Test Case Design Techniques",
        content: [
          "Test case design techniques help testers create effective test cases with better coverage.",
          "Common techniques include Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing and State Transition Testing.",
        ],
        keyPoints: [
          "Equivalence Partitioning",
          "Boundary Value Analysis",
          "Decision Tables",
          "State Transition Testing",
        ],
        example:
          "For an age field accepting 18 to 60, boundary testing would focus on values around 18 and 60.",
      },

      {
        id: 10,
        title: "Bug Reporting",
        content: [
          "A good bug report should provide enough information for the development team to understand and reproduce the issue.",
          "A defect report generally contains a title, environment, steps to reproduce, expected result, actual result, severity and priority.",
        ],
        keyPoints: [
          "Clear defect title",
          "Steps to reproduce",
          "Expected result",
          "Actual result",
          "Severity",
          "Priority",
          "Screenshots or evidence",
        ],
        example:
          "Example: Instead of writing 'Login not working', write 'Login button remains disabled after entering valid credentials on Chrome'.",
      },
    ],
  },

  {
    id: 3,
    title: "SQL for Software Testers",
    lessons: [
      {
        id: 11,
        title: "SQL Fundamentals",
        content: [
          "SQL is used to interact with relational databases.",
          "Software testers commonly use SQL to validate data created or modified by an application.",
          "Basic SQL knowledge is especially useful for backend validation and database testing.",
        ],
        keyPoints: [
          "SELECT",
          "WHERE",
          "ORDER BY",
          "GROUP BY",
          "JOIN",
        ],
        example:
          "Example: SELECT * FROM users WHERE email = 'test@example.com'; can be used to verify whether a user record exists.",
      },

      {
        id: 12,
        title: "SQL Joins",
        content: [
          "Joins are used to retrieve related data from multiple tables.",
          "Common joins include INNER JOIN, LEFT JOIN, RIGHT JOIN and FULL OUTER JOIN.",
        ],
        keyPoints: [
          "INNER JOIN",
          "LEFT JOIN",
          "RIGHT JOIN",
          "FULL OUTER JOIN",
        ],
        example:
          "Example: A tester can join users and orders tables to verify that an order belongs to the correct user.",
      },
    ],
  },

  {
    id: 4,
    title: "API Testing with Postman",
    lessons: [
      {
        id: 13,
        title: "API Testing Fundamentals",
        content: [
          "API testing verifies communication between software components through application programming interfaces.",
          "Testers validate requests, responses, status codes, headers, authentication and response data.",
        ],
        keyPoints: [
          "Request and Response",
          "HTTP Methods",
          "Status Codes",
          "Headers",
          "Authentication",
          "Response Validation",
        ],
        example:
          "Example: A GET /users API should return the expected HTTP status code and correct user data.",
      },

      {
        id: 14,
        title: "Postman Collections",
        content: [
          "Postman can be used to create, organize and execute API requests.",
          "Collections help testers maintain related API requests together and execute them systematically.",
        ],
        keyPoints: [
          "Collections",
          "Environments",
          "Variables",
          "Tests",
          "Pre-request Scripts",
        ],
        example:
          "Example: Store the base API URL in an environment variable and reuse it across multiple requests.",
      },
    ],
  },

  {
    id: 5,
    title: "Selenium WebDriver",
    lessons: [
      {
        id: 15,
        title: "Selenium Fundamentals",
        content: [
          "Selenium WebDriver is a browser automation tool used to automate web applications.",
          "It allows automation scripts to interact with browsers and web elements.",
          "Selenium supports multiple programming languages and browsers.",
        ],
        keyPoints: [
          "Web browser automation",
          "Locators",
          "Web elements",
          "Browser actions",
          "Assertions",
        ],
        example:
          "Example: Selenium can open a login page, enter username and password, click Login and verify the resulting page.",
      },

      {
        id: 16,
        title: "Selenium Locators",
        content: [
          "Locators are used to identify elements on a web page.",
          "Common Selenium locators include ID, Name, Class Name, CSS Selector and XPath.",
        ],
        keyPoints: [
          "ID",
          "Name",
          "Class Name",
          "CSS Selector",
          "XPath",
          "Link Text",
        ],
        example:
          'Example: driver.findElement(By.id("username")) identifies an element using its ID.',
      },
    ],
  },

  {
    id: 6,
    title: "Playwright Automation",
    lessons: [
      {
        id: 17,
        title: "Playwright Fundamentals",
        content: [
          "Playwright is a modern end-to-end testing and browser automation framework.",
          "It supports Chromium, Firefox and WebKit and provides features such as auto-waiting, browser contexts, tracing and powerful locators.",
          "Playwright can be used with TypeScript, JavaScript, Python, Java and .NET.",
        ],
        keyPoints: [
          "Modern browser automation",
          "Chromium, Firefox and WebKit",
          "Auto-waiting",
          "Powerful locators",
          "Parallel execution",
          "Trace Viewer",
        ],
        example:
          "Example: A Playwright test can open a browser, navigate to a login page, fill credentials and verify the dashboard using an assertion.",
      },

      {
        id: 18,
        title: "Playwright with TypeScript",
        content: [
          "TypeScript provides static typing on top of JavaScript and is widely used for maintainable automation frameworks.",
          "Playwright's official test runner provides fixtures, assertions, parallel execution, retries and reporting capabilities.",
        ],
        keyPoints: [
          "TypeScript",
          "Playwright Test",
          "Fixtures",
          "Assertions",
          "Parallel execution",
          "HTML reports",
        ],
        example:
          "Example: A Playwright TypeScript project can organize tests, page objects, test data and reusable fixtures into separate modules.",
      },

      {
        id: 19,
        title: "Page Object Model with Playwright",
        content: [
          "Page Object Model is a design approach where page-specific locators and actions are maintained in dedicated classes.",
          "It improves readability, reusability and maintainability of automation code.",
        ],
        keyPoints: [
          "Page classes",
          "Reusable methods",
          "Centralized locators",
          "Maintainability",
          "Separation of concerns",
        ],
        example:
          "Example: LoginPage can contain username, password and login button locators along with a reusable login() method.",
      },
    ],
  },

  {
    id: 7,
    title: "Automation Framework",
    lessons: [
      {
        id: 20,
        title: "Automation Framework Architecture",
        content: [
          "An automation framework provides a structured way to organize test scripts, test data, utilities, configuration and reports.",
          "A well-designed framework should be maintainable, reusable and scalable.",
        ],
        keyPoints: [
          "Test organization",
          "Page Objects",
          "Test data",
          "Utilities",
          "Configuration",
          "Reporting",
        ],
        example:
          "Example: A framework may separate tests, page objects, fixtures, test data and utility functions into different folders.",
      },

      {
        id: 21,
        title: "Data Driven Testing",
        content: [
          "Data-driven testing separates test logic from test data.",
          "The same test can execute multiple times using different input values.",
        ],
        keyPoints: [
          "Reusable test logic",
          "External test data",
          "Multiple test inputs",
          "Better coverage",
        ],
        example:
          "Example: The same login test can run with valid, invalid, locked and empty credentials from a data source.",
      },
    ],
  },

  {
    id: 8,
    title: "CI/CD & Git",
    lessons: [
      {
        id: 22,
        title: "Git for Test Automation",
        content: [
          "Git is a distributed version control system used to manage source code and collaborate with development and testing teams.",
          "Automation testers commonly use Git to maintain framework code and collaborate through branches and pull requests.",
        ],
        keyPoints: [
          "Repository",
          "Branch",
          "Commit",
          "Pull",
          "Push",
          "Merge",
        ],
        example:
          "Example: A tester creates a feature branch, adds new automation tests, commits the changes and raises a pull request.",
      },

      {
        id: 23,
        title: "CI/CD for Automation",
        content: [
          "Continuous Integration and Continuous Delivery/Deployment help teams automatically build, test and deliver software.",
          "Automation tests can be integrated into CI pipelines to provide fast feedback.",
        ],
        keyPoints: [
          "Continuous Integration",
          "Automated execution",
          "Build pipelines",
          "Test reports",
          "Fast feedback",
        ],
        example:
          "Example: Every pull request can trigger automated Playwright tests and generate a test report.",
      },
    ],
  },
];

function buildQuiz(lesson: Lesson): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  const addQuestion = (
    question: string,
    options: string[],
    answer: number
  ) => {
    questions.push({
      question,
      options,
      answer,
    });
  };

  // Q1 - Concept
  if (lesson.id === 1) {
    addQuestion(
      "What is the primary purpose of software testing?",
      [
        "To evaluate and verify that software behaves as expected",
        "To write production code",
        "To design databases",
        "To install operating systems",
      ],
      0
    );

    addQuestion(
      "Which of the following is a major goal of software testing?",
      [
        "Identify defects and improve software quality",
        "Increase monitor brightness",
        "Replace the development team",
        "Create graphic designs",
      ],
      0
    );

    addQuestion(
      "When should software testing activities ideally begin?",
      [
        "As early as possible in the software lifecycle",
        "Only after production release",
        "Only after all bugs are fixed",
        "After the application is deleted",
      ],
      0
    );

    addQuestion(
      "What can testing help teams understand?",
      [
        "Product risks and requirements",
        "Only hardware specifications",
        "Only employee salaries",
        "Only internet speed",
      ],
      0
    );

    addQuestion(
      "Which is a valid example of testing a Login feature?",
      [
        "Checking valid and invalid credentials",
        "Changing the computer wallpaper",
        "Installing a printer",
        "Creating a presentation",
      ],
      0
    );
  }

  else if (lesson.id === 2) {
    addQuestion(
      "What does SDLC stand for?",
      [
        "Software Development Life Cycle",
        "System Data Login Control",
        "Software Design Level Code",
        "System Development Login Cycle",
      ],
      0
    );

    addQuestion(
      "What does STLC primarily focus on?",
      [
        "Software testing activities",
        "Hardware manufacturing",
        "Graphic design",
        "Network installation",
      ],
      0
    );

    addQuestion(
      "Which activity belongs to STLC?",
      [
        "Requirement analysis",
        "Computer assembly",
        "Video editing",
        "Logo design",
      ],
      0
    );

    addQuestion(
      "Why is early testing important?",
      [
        "It helps identify issues earlier and can reduce cost",
        "It removes the need for requirements",
        "It eliminates developers",
        "It prevents all future defects",
      ],
      0
    );

    addQuestion(
      "What is the relationship between SDLC and STLC?",
      [
        "STLC focuses specifically on testing within the overall SDLC",
        "They are exactly the same process",
        "SDLC is only for testers",
        "STLC is only for database administrators",
      ],
      0
    );
  }

  else if (lesson.id === 3) {
    addQuestion(
      "What does testing demonstrate?",
      [
        "The presence of defects",
        "The complete absence of defects",
        "That coding is unnecessary",
        "That requirements are unnecessary",
      ],
      0
    );

    addQuestion(
      "Why is exhaustive testing generally impossible?",
      [
        "There can be too many possible combinations and conditions",
        "Testing tools do not exist",
        "Applications have no inputs",
        "Testers cannot execute software",
      ],
      0
    );

    addQuestion(
      "What does early testing help save?",
      [
        "Time and cost",
        "Only disk space",
        "Only electricity",
        "Only network bandwidth",
      ],
      0
    );

    addQuestion(
      "What is meant by defect clustering?",
      [
        "Defects tend to be concentrated in certain areas",
        "All defects occur randomly",
        "Defects only occur in databases",
        "Defects only occur after release",
      ],
      0
    );

    addQuestion(
      "What does context-dependent testing mean?",
      [
        "Testing approach depends on the product and its context",
        "Every application must use exactly the same tests",
        "Only automation testing is allowed",
        "Testing does not depend on requirements",
      ],
      0
    );
  }

  else if (lesson.id === 4) {
    addQuestion(
      "What is verification mainly concerned with?",
      [
        "Are we building the product right?",
        "Are we hiring the right people?",
        "Are we buying the right hardware?",
        "Are we deploying to the cloud?",
      ],
      0
    );

    addQuestion(
      "What is validation mainly concerned with?",
      [
        "Are we building the right product?",
        "Are we writing enough code?",
        "Are we using enough servers?",
        "Are we creating enough documents?",
      ],
      0
    );

    addQuestion(
      "Which activity supports verification?",
      [
        "Reviews and inspections",
        "Only production deployment",
        "Only browser testing",
        "Only database backup",
      ],
      0
    );

    addQuestion(
      "Which activity supports validation?",
      [
        "Executing the software and checking its behaviour",
        "Only reviewing requirements",
        "Only reading documentation",
        "Only designing architecture",
      ],
      0
    );

    addQuestion(
      "Reviewing a requirement document is an example of:",
      [
        "Verification",
        "Validation",
        "Production deployment",
        "Performance testing",
      ],
      0
    );
  }

  else if (lesson.id === 5) {
    addQuestion(
      "Which is the first common testing level?",
      [
        "Unit Testing",
        "System Testing",
        "Acceptance Testing",
        "Production Testing",
      ],
      0
    );

    addQuestion(
      "Which testing level focuses on interactions between components?",
      [
        "Integration Testing",
        "Unit Testing",
        "Acceptance Testing",
        "Smoke Testing",
      ],
      0
    );

    addQuestion(
      "Which testing level evaluates the complete system?",
      [
        "System Testing",
        "Unit Testing",
        "Component Testing",
        "Code Review",
      ],
      0
    );

    addQuestion(
      "Which testing level is commonly associated with business/user acceptance?",
      [
        "Acceptance Testing",
        "Unit Testing",
        "Integration Testing",
        "Smoke Testing",
      ],
      0
    );

    addQuestion(
      "Testing a login method individually is an example of:",
      [
        "Unit Testing",
        "System Testing",
        "Acceptance Testing",
        "Performance Testing",
      ],
      0
    );
  }

  else if (lesson.id === 6) {
    addQuestion(
      "What does functional testing verify?",
      [
        "What the system does",
        "Only system speed",
        "Only security",
        "Only database size",
      ],
      0
    );

    addQuestion(
      "Which is a non-functional testing area?",
      [
        "Performance",
        "Login functionality",
        "Registration functionality",
        "Checkout functionality",
      ],
      0
    );

    addQuestion(
      "What is regression testing mainly used for?",
      [
        "Checking that existing functionality still works after changes",
        "Testing only new code",
        "Testing only hardware",
        "Deleting old test cases",
      ],
      0
    );

    addQuestion(
      "What is smoke testing generally used for?",
      [
        "Checking whether a build is stable enough for further testing",
        "Testing every possible scenario",
        "Testing only database queries",
        "Testing only performance",
      ],
      0
    );

    addQuestion(
      "Which testing approach allows testers to learn and test simultaneously?",
      [
        "Exploratory Testing",
        "Unit Testing",
        "Compilation",
        "Deployment",
      ],
      0
    );
  }

  else if (lesson.id === 7) {
    addQuestion(
      "What is a test scenario?",
      [
        "A high-level statement describing what needs to be tested",
        "A detailed database query",
        "A production server",
        "A source code compiler",
      ],
      0
    );

    addQuestion(
      "What is a test case?",
      [
        "A detailed executable test with steps and expected results",
        "Only a bug title",
        "Only a requirement",
        "Only a test environment",
      ],
      0
    );

    addQuestion(
      "Which should a test case contain?",
      [
        "Steps, test data and expected result",
        "Only a title",
        "Only screenshots",
        "Only source code",
      ],
      0
    );

    addQuestion(
      "Why should test cases be traceable to requirements?",
      [
        "To ensure requirements are adequately covered",
        "To increase application size",
        "To avoid testing",
        "To remove defects automatically",
      ],
      0
    );

    addQuestion(
      "Which is a correct test scenario example?",
      [
        "Verify Login functionality",
        "Click username field and type John",
        "Open Chrome version 151",
        "Execute SQL query",
      ],
      0
    );
  }

  else if (lesson.id === 8) {
    addQuestion(
      "Which is a common initial state of a defect?",
      [
        "New",
        "Closed",
        "Deleted",
        "Archived",
      ],
      0
    );

    addQuestion(
      "What happens after a developer fixes a defect?",
      [
        "The tester can retest it",
        "It is always immediately deleted",
        "It becomes a requirement",
        "The application is removed",
      ],
      0
    );

    addQuestion(
      "What does Reopen generally mean?",
      [
        "The defect still exists after retesting",
        "The defect was never reported",
        "The application passed all tests",
        "The developer created a new project",
      ],
      0
    );

    addQuestion(
      "When is a defect commonly moved to Closed?",
      [
        "After successful verification of the fix",
        "Before testing starts",
        "When it is first reported",
        "Before assigning it",
      ],
      0
    );

    addQuestion(
      "Which sequence is reasonable?",
      [
        "New → Assigned → Fixed → Retest → Closed",
        "Closed → New → Fixed → Assigned",
        "Fixed → New → Closed → Assigned",
        "Retest → New → Assigned → Closed",
      ],
      0
    );
  }

  else if (lesson.id === 9) {
    addQuestion(
      "Which technique divides input data into groups?",
      [
        "Equivalence Partitioning",
        "Boundary Value Analysis",
        "Decision Table",
        "State Transition",
      ],
      0
    );

    addQuestion(
      "Which technique focuses on values around limits?",
      [
        "Boundary Value Analysis",
        "Equivalence Partitioning",
        "Decision Table",
        "Exploratory Testing",
      ],
      0
    );

    addQuestion(
      "Which technique is useful when multiple conditions and actions exist?",
      [
        "Decision Table Testing",
        "Boundary Value Analysis",
        "Smoke Testing",
        "Unit Testing",
      ],
      0
    );

    addQuestion(
      "Which technique focuses on changes between states?",
      [
        "State Transition Testing",
        "Decision Table Testing",
        "Regression Testing",
        "Performance Testing",
      ],
      0
    );

    addQuestion(
      "For an age range of 18 to 60, which values are useful for boundary testing?",
      [
        "17, 18, 19, 59, 60, 61",
        "25, 30, 35",
        "1, 5, 10",
        "100, 200, 300",
      ],
      0
    );
  }

  else if (lesson.id === 10) {
    addQuestion(
      "What is an important part of a good bug report?",
      [
        "Steps to reproduce",
        "Developer's personal details",
        "Computer wallpaper",
        "Office location",
      ],
      0
    );

    addQuestion(
      "What is the expected result?",
      [
        "What should happen according to the requirement",
        "What actually happened",
        "The bug title",
        "The tester's opinion",
      ],
      0
    );

    addQuestion(
      "What is the actual result?",
      [
        "What actually happened during execution",
        "What should happen",
        "The project requirement",
        "The test case ID only",
      ],
      0
    );

    addQuestion(
      "Which attributes help communicate defect importance?",
      [
        "Severity and Priority",
        "Username and Password",
        "Browser and OS only",
        "Width and Height",
      ],
      0
    );

    addQuestion(
      "Which bug title is better?",
      [
        "Login button remains disabled after entering valid credentials on Chrome",
        "Login broken",
        "Bug",
        "Not working",
      ],
      0
    );
  }

  else if (lesson.id === 11) {
    addQuestion(
      "Which SQL command is used to retrieve data?",
      [
        "SELECT",
        "INSERT",
        "DELETE",
        "UPDATE",
      ],
      0
    );

    addQuestion(
      "Which SQL clause filters records?",
      [
        "WHERE",
        "ORDER BY",
        "GROUP BY",
        "JOIN",
      ],
      0
    );

    addQuestion(
      "Which clause sorts query results?",
      [
        "ORDER BY",
        "WHERE",
        "SELECT",
        "JOIN",
      ],
      0
    );

    addQuestion(
      "Which clause groups rows for aggregation?",
      [
        "GROUP BY",
        "WHERE",
        "ORDER BY",
        "SELECT",
      ],
      0
    );

    addQuestion(
      "Why do testers commonly use SQL?",
      [
        "To validate data created or modified by an application",
        "To design UI screens",
        "To create animations",
        "To configure monitors",
      ],
      0
    );
  }

  else if (lesson.id === 12) {
    addQuestion(
      "What is the purpose of a SQL JOIN?",
      [
        "To retrieve related data from multiple tables",
        "To delete a database",
        "To create a browser",
        "To execute JavaScript",
      ],
      0
    );

    addQuestion(
      "Which JOIN returns matching records from both tables?",
      [
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "FULL OUTER JOIN",
      ],
      0
    );

    addQuestion(
      "Which JOIN keeps all records from the left table?",
      [
        "LEFT JOIN",
        "INNER JOIN",
        "RIGHT JOIN",
        "CROSS JOIN",
      ],
      0
    );

    addQuestion(
      "Which JOIN keeps all records from the right table?",
      [
        "RIGHT JOIN",
        "INNER JOIN",
        "LEFT JOIN",
        "SELF JOIN",
      ],
      0
    );

    addQuestion(
      "Why might a tester join users and orders tables?",
      [
        "To verify that an order belongs to the correct user",
        "To change browser settings",
        "To test CSS",
        "To install SQL Server",
      ],
      0
    );
  }

  else if (lesson.id === 13) {
    addQuestion(
      "What does API testing primarily verify?",
      [
        "Communication between software components",
        "Only UI colors",
        "Only browser history",
        "Only hardware",
      ],
      0
    );

    addQuestion(
      "Which of these is commonly validated in API testing?",
      [
        "HTTP status codes",
        "Monitor resolution",
        "Keyboard layout",
        "Desktop wallpaper",
      ],
      0
    );

    addQuestion(
      "Which HTTP method is commonly used to retrieve data?",
      [
        "GET",
        "POST",
        "DELETE",
        "PATCH",
      ],
      0
    );

    addQuestion(
      "What can API authentication validate?",
      [
        "Whether access is properly authorized",
        "Whether CSS is aligned",
        "Whether the browser is maximized",
        "Whether the monitor is active",
      ],
      0
    );

    addQuestion(
      "What should a GET /users API return?",
      [
        "Expected HTTP status and correct user data",
        "A source code compiler",
        "A browser extension",
        "A hardware driver",
      ],
      0
    );
  }

  else if (lesson.id === 14) {
    addQuestion(
      "What is a Postman Collection?",
      [
        "A group of related API requests",
        "A database table",
        "A browser",
        "A programming language",
      ],
      0
    );

    addQuestion(
      "What are Postman environments useful for?",
      [
        "Managing reusable environment variables",
        "Writing Java classes",
        "Creating UI designs",
        "Installing browsers",
      ],
      0
    );

    addQuestion(
      "What can Postman variables store?",
      [
        "Values such as base URLs or tokens",
        "Only screenshots",
        "Only videos",
        "Only source code",
      ],
      0
    );

    addQuestion(
      "What are Postman tests used for?",
      [
        "Validating API responses",
        "Designing web pages",
        "Installing operating systems",
        "Creating databases",
      ],
      0
    );

    addQuestion(
      "Why use collections?",
      [
        "To organize and execute related API requests systematically",
        "To replace APIs",
        "To remove authentication",
        "To create hardware",
      ],
      0
    );
  }

  else if (lesson.id === 15) {
    addQuestion(
      "What is Selenium WebDriver used for?",
      [
        "Browser automation",
        "Database administration",
        "Graphic design",
        "Operating system installation",
      ],
      0
    );

    addQuestion(
      "What does Selenium interact with?",
      [
        "Browsers and web elements",
        "Only databases",
        "Only operating systems",
        "Only APIs",
      ],
      0
    );

    addQuestion(
      "Which is a Selenium concept?",
      [
        "Locators",
        "SQL Tables",
        "Git Branches",
        "API Tokens",
      ],
      0
    );

    addQuestion(
      "What can Selenium automate?",
      [
        "Opening a browser and interacting with web elements",
        "Replacing the operating system",
        "Creating hardware",
        "Managing employees",
      ],
      0
    );

    addQuestion(
      "Which is commonly used to verify expected behaviour in Selenium tests?",
      [
        "Assertions",
        "Photoshop",
        "Excel formulas only",
        "Network cables",
      ],
      0
    );
  }

  else if (lesson.id === 16) {
    addQuestion(
      "What is a locator?",
      [
        "A way to identify an element on a web page",
        "A database",
        "A browser",
        "A test report",
      ],
      0
    );

    addQuestion(
      "Which is a Selenium locator?",
      [
        "ID",
        "SQL",
        "Git",
        "HTTP",
      ],
      0
    );

    addQuestion(
      "Which locator uses an element's name attribute?",
      [
        "Name",
        "XPath",
        "CSS",
        "Link Text",
      ],
      0
    );

    addQuestion(
      "Which locator can use a path expression?",
      [
        "XPath",
        "ID",
        "Name",
        "Class Name",
      ],
      0
    );

    addQuestion(
      "Which code correctly identifies an element by ID?",
      [
        'driver.findElement(By.id("username"))',
        'driver.findElement(By.name("username"))',
        'driver.findElement(By.css("username"))',
        'driver.findElement(By.xpath("id"))',
      ],
      0
    );
  }

  else if (lesson.id === 17) {
    addQuestion(
      "What is Playwright?",
      [
        "A modern end-to-end testing and browser automation framework",
        "A database",
        "A programming language",
        "A version control system",
      ],
      0
    );

    addQuestion(
      "Which browsers does Playwright support?",
      [
        "Chromium, Firefox and WebKit",
        "Only Chrome",
        "Only Firefox",
        "Only Safari",
      ],
      0
    );

    addQuestion(
      "What is auto-waiting?",
      [
        "Playwright automatically waits for required conditions before actions",
        "It waits for the developer",
        "It waits for the computer to restart",
        "It disables assertions",
      ],
      0
    );

    addQuestion(
      "What does Playwright Trace Viewer help with?",
      [
        "Debugging and inspecting test execution",
        "Creating databases",
        "Writing SQL",
        "Managing Git branches",
      ],
      0
    );

    addQuestion(
      "Which is a Playwright feature?",
      [
        "Parallel execution",
        "Database normalization",
        "SQL joins",
        "Git merge",
      ],
      0
    );
  }

  else if (lesson.id === 18) {
    addQuestion(
      "What does TypeScript add to JavaScript?",
      [
        "Static typing",
        "SQL support",
        "Database tables",
        "Browser drivers",
      ],
      0
    );

    addQuestion(
      "What is Playwright Test?",
      [
        "Playwright's test runner",
        "A database",
        "A browser",
        "A Git client",
      ],
      0
    );

    addQuestion(
      "Which is supported by Playwright Test?",
      [
        "Fixtures and assertions",
        "Only SQL",
        "Only HTML",
        "Only CSS",
      ],
      0
    );

    addQuestion(
      "What can HTML reports provide?",
      [
        "A visual summary of test execution",
        "Database backups",
        "Source code compilation",
        "Browser installation",
      ],
      0
    );

    addQuestion(
      "Why use TypeScript for automation frameworks?",
      [
        "It improves maintainability through static typing",
        "It removes the need for testing",
        "It replaces Playwright",
        "It disables assertions",
      ],
      0
    );
  }

  else if (lesson.id === 19) {
    addQuestion(
      "What is Page Object Model?",
      [
        "A design approach that keeps page-specific locators and actions in classes",
        "A database design",
        "A Git strategy",
        "An API protocol",
      ],
      0
    );

    addQuestion(
      "What is a benefit of POM?",
      [
        "Improved maintainability",
        "More duplicate code",
        "Less reuse",
        "No separation",
      ],
      0
    );

    addQuestion(
      "Where should page-specific locators normally be maintained?",
      [
        "Inside page classes",
        "Only inside reports",
        "Inside package.json",
        "Inside Git commits",
      ],
      0
    );

    addQuestion(
      "What can a LoginPage class contain?",
      [
        "Username, password and login button locators",
        "Only SQL queries",
        "Only Git commands",
        "Only API responses",
      ],
      0
    );

    addQuestion(
      "What does POM help achieve?",
      [
        "Separation of concerns and reusable automation actions",
        "Removal of all test cases",
        "Database migration",
        "Operating system updates",
      ],
      0
    );
  }

  else if (lesson.id === 20) {
    addQuestion(
      "What is an automation framework?",
      [
        "A structured way to organize tests, data, utilities and configuration",
        "Only a browser",
        "Only a test case",
        "Only a database",
      ],
      0
    );

    addQuestion(
      "Which is commonly part of a framework?",
      [
        "Page Objects",
        "Only screenshots",
        "Only emails",
        "Only browsers",
      ],
      0
    );

    addQuestion(
      "Why should a framework be reusable?",
      [
        "To reduce duplication and make automation easier to maintain",
        "To increase manual work",
        "To avoid test execution",
        "To remove reports",
      ],
      0
    );

    addQuestion(
      "What can utilities contain?",
      [
        "Reusable helper functions",
        "Only requirements",
        "Only defects",
        "Only browser tabs",
      ],
      0
    );

    addQuestion(
      "What should a good automation framework be?",
      [
        "Maintainable, reusable and scalable",
        "Large and duplicated",
        "Manual only",
        "Unstructured",
      ],
      0
    );
  }

  else if (lesson.id === 21) {
    addQuestion(
      "What does data-driven testing separate?",
      [
        "Test logic from test data",
        "Developers from testers",
        "Browsers from operating systems",
        "Git from GitHub",
      ],
      0
    );

    addQuestion(
      "What is the main benefit of data-driven testing?",
      [
        "The same test can run with multiple input values",
        "It removes test cases",
        "It removes assertions",
        "It removes test data",
      ],
      0
    );

    addQuestion(
      "Which can be used as external test data?",
      [
        "Excel or other data sources",
        "Only browser history",
        "Only screenshots",
        "Only CSS",
      ],
      0
    );

    addQuestion(
      "What does data-driven testing improve?",
      [
        "Test coverage and reusability",
        "Monitor quality",
        "Internet speed",
        "Hardware performance",
      ],
      0
    );

    addQuestion(
      "Which login scenarios can use the same data-driven test?",
      [
        "Valid, invalid, locked and empty credentials",
        "Only valid credentials",
        "Only screenshots",
        "Only browser installation",
      ],
      0
    );
  }

  else if (lesson.id === 22) {
    addQuestion(
      "What is Git?",
      [
        "A distributed version control system",
        "A browser automation tool",
        "A database",
        "An API testing tool",
      ],
      0
    );

    addQuestion(
      "What is a Git branch?",
      [
        "An independent line of development",
        "A database table",
        "A browser tab",
        "A test report",
      ],
      0
    );

    addQuestion(
      "What does commit mean in Git?",
      [
        "Recording changes in the repository history",
        "Deleting the repository",
        "Running a browser",
        "Executing SQL",
      ],
      0
    );

    addQuestion(
      "What does push do?",
      [
        "Uploads local commits to a remote repository",
        "Downloads a browser",
        "Deletes tests",
        "Creates a database",
      ],
      0
    );

    addQuestion(
      "What is a pull request used for?",
      [
        "Proposing and reviewing changes before merging",
        "Running SQL queries",
        "Opening a browser",
        "Creating test data",
      ],
      0
    );
  }

  else if (lesson.id === 23) {
    addQuestion(
      "What does CI stand for?",
      [
        "Continuous Integration",
        "Code Installation",
        "Continuous Inspection",
        "Central Integration",
      ],
      0
    );

    addQuestion(
      "What is a major benefit of CI/CD?",
      [
        "Fast automated feedback",
        "Manual-only testing",
        "No testing",
        "No source control",
      ],
      0
    );

    addQuestion(
      "What can trigger automation tests in a CI pipeline?",
      [
        "A pull request or code change",
        "Changing desktop wallpaper",
        "Turning off the monitor",
        "Opening a calculator",
      ],
      0
    );

    addQuestion(
      "What can CI pipelines generate?",
      [
        "Automated test reports",
        "Only screenshots of the desktop",
        "Only SQL tables",
        "Only Git branches",
      ],
      0
    );

    addQuestion(
      "Why integrate automation tests into CI?",
      [
        "To detect regressions quickly",
        "To avoid automation",
        "To remove developers",
        "To prevent code reviews",
      ],
      0
    );
  }

  return questions;
}

const generateCertificate = () => {
  const pdf = new jsPDF("landscape", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // =========================
  // DYNAMIC DATA
  // =========================

  const studentName =
    localStorage.getItem("studentName") || "Student";

  const totalLessons = modules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );

  const completionDate = new Date().toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );

  const certificateId =
    "SRSA-" + Date.now().toString().slice(-8);

  // =========================
  // LOAD TEMPLATE
  // =========================

  const template = new Image();

  template.src = "/certificate/certificate.png";

  template.onload = () => {
    // =====================================================
    // 1. ADD ORIGINAL CERTIFICATE TEMPLATE
    // =====================================================

    pdf.addImage(
      template,
      "PNG",
      0,
      0,
      pageWidth,
      pageHeight
    );

    // =====================================================
    // IMPORTANT:
    // Template already contains placeholder values.
    // We cover ONLY those values with matching background.
    // =====================================================

    pdf.setFillColor(249, 248, 245);

    // =====================================================
    // 2. CLEAN OLD LESSON TEXT
    // =====================================================

    pdf.rect(
      92,
      127,
      113,
      15,
      "F"
    );

    // =====================================================
    // 3. CLEAN OLD COMPLETION DATE
    // =====================================================

    pdf.rect(
  43,
  154,
  43,
  7,
  "F"
);


    // =====================================================
    // 4. CLEAN OLD CERTIFICATE ID
    // =====================================================

    pdf.rect(
  pageWidth - 86,
  154,
  43,
  7,
  "F"
);

    // =====================================================
    // 5. STUDENT NAME
    // =====================================================

    pdf.setFont("times", "italic");
    pdf.setFontSize(27);
    pdf.setTextColor(15, 40, 70);

    pdf.text(
      studentName,
      pageWidth / 2,
      98,
      {
        align: "center",
      }
    );

    // =====================================================
    // 6. LESSON COUNT
    // =====================================================

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(15, 40, 70);

    pdf.text(
      `Successfully completed ${totalLessons} lessons`,
      pageWidth / 2,
      132,
      {
        align: "center",
      }
    );

    // =====================================================
    // 7. ASSESSMENT TEXT
    // =====================================================

    pdf.text(
      "including lesson knowledge checks and assessments.",
      pageWidth / 2,
      138,
      {
        align: "center",
      }
    );

    // =====================================================
    // =====================================================
// =====================================================
// 8. COMPLETION DATE
// =====================================================

pdf.setFont("helvetica", "normal");
pdf.setFontSize(8.5);
pdf.setTextColor(15, 40, 70);

pdf.text(
  completionDate,
  64.5,
  158,
  {
    align: "center",
  }
);

// =====================================================
// 9. CERTIFICATE ID
// =====================================================

pdf.text(
  certificateId,
  pageWidth - 64.5,
  158,
  {
    align: "center",
  }
);
    // =====================================================
    // 10. DOWNLOAD
    // =====================================================

    pdf.save(
      "SR-Skills-Academy-Certificate.pdf"
    );
  };

  // =====================================================
  // TEMPLATE ERROR
  // =====================================================

  template.onerror = () => {
    console.error(
      "Certificate template could not be loaded."
    );
  };
};

export default function SoftwareTestingCourse() {
  const allLessons = useMemo(
    () => modules.flatMap((module) => module.lessons),
    []
  );
  

  const quizBank = useMemo(() => {
    const bank: Record<number, QuizQuestion[]> = {};

    allLessons.forEach((lesson) => {
      bank[lesson.id] = buildQuiz(lesson);
    });

    return bank;
  }, [allLessons]);

  const [currentLessonId, setCurrentLessonId] = useState(1);

  const [completedLessons, setCompletedLessons] = useState<number[]>(
    []
  );

  const [openModules, setOpenModules] = useState<number[]>([1]);

  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    []
  );

  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const [quizScore, setQuizScore] = useState(0);

  const [isLoaded, setIsLoaded] = useState(false);


  const allLessonsCompleted =
    completedLessons.length === allLessons.length &&
    allLessons.length > 0;
  

  // LOAD PROGRESS
useEffect(() => {
  try {
    const savedCompleted = localStorage.getItem(
      "sr-skills-completed-lessons"
    );

    if (savedCompleted) {
      setCompletedLessons(JSON.parse(savedCompleted));
    }

    const savedLesson = localStorage.getItem(
      "sr-skills-current-lesson"
    );

    if (savedLesson) {
      setCurrentLessonId(Number(savedLesson));
    }

  } catch (error) {
    console.error(
      "Failed to load course progress:",
      error
    );
  }

  setIsLoaded(true);
}, []);

  // SAVE COMPLETED LESSONS
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "sr-skills-completed-lessons",
      JSON.stringify(completedLessons)
    );
  }, [completedLessons, isLoaded]);

  // SAVE CURRENT LESSON
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "sr-skills-current-lesson",
      String(currentLessonId)
    );
  }, [currentLessonId, isLoaded]);

  const currentIndex = allLessons.findIndex(
    (lesson) => lesson.id === currentLessonId
  );

  const currentLesson =
    allLessons[currentIndex] ?? allLessons[0];

  const currentQuiz =
    quizBank[currentLessonId] ?? [];

  const progress =
    allLessons.length === 0
      ? 0
      : Math.round(
          (completedLessons.length / allLessons.length) * 100
        );
        const courseCompleted =
  allLessons.length > 0 &&
  completedLessons.length === allLessons.length;

  const quizPassed =
    quizSubmitted && quizScore >= 3;

  const resetQuiz = () => {
    setSelectedAnswers([]);
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const selectLesson = (lessonId: number) => {
    const lessonIndex = allLessons.findIndex(
  (lesson) => lesson.id === lessonId
);

const isUnlocked =
  lessonIndex === 0 ||
  completedLessons.includes(allLessons[lessonIndex - 1]?.id);

if (!isUnlocked) {
  return;
}
    setCurrentLessonId(lessonId);

    setSelectedAnswers([]);
    setQuizSubmitted(false);
    setQuizScore(0);

    const targetModule = modules.find((module) =>
      module.lessons.some(
        (lesson) => lesson.id === lessonId
      )
    );

    if (
      targetModule &&
      !openModules.includes(targetModule.id)
    ) {
      setOpenModules((previous) => [
        ...previous,
        targetModule.id,
      ]);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const markComplete = () => {
    if (!quizPassed) return;

    if (!completedLessons.includes(currentLessonId)) {
      setCompletedLessons((previous) => [
        ...previous,
        currentLessonId,
      ]);
    }
  };

  const submitQuiz = () => {
    if (selectedAnswers.length !== currentQuiz.length) {
      return;
    }

    const score = currentQuiz.reduce(
      (total, question, index) =>
        total +
        (selectedAnswers[index] === question.answer
          ? 1
          : 0),
      0
    );

    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const goNext = () => {
    if (currentIndex < allLessons.length - 1) {
      selectLesson(
        allLessons[currentIndex + 1].id
      );
    }
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      selectLesson(
        allLessons[currentIndex - 1].id
      );
    }
  };

  const toggleModule = (moduleId: number) => {
    setOpenModules((previous) =>
      previous.includes(moduleId)
        ? previous.filter(
            (id) => id !== moduleId
          )
        : [...previous, moduleId]
    );
  };
   
    
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
   
      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="flex h-20 items-center justify-between px-5 lg:px-8">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
              SR
            </div>

            <div>
              <div className="font-bold">
                SR Skills Academy
              </div>

              <div className="text-[10px] uppercase tracking-widest text-slate-400">
                Learn • Practice • Grow
              </div>
            </div>
          </div>

          <div className="hidden w-[420px] md:block">
            <div className="mb-1 flex justify-between text-xs font-semibold">
              <span>Course Progress</span>

              <span className="text-indigo-600">
                {progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-indigo-600 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">

            <div className="hidden text-right sm:block">
              <div className="text-xs text-slate-400">
                Learning
              </div>

              <div className="font-bold">
                {completedLessons.length}/
                {allLessons.length} lessons
              </div>
            </div>

            <button
              onClick={() =>
                (window.location.href = "/")
              }
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold hover:border-indigo-300 hover:text-indigo-600"
            >
              Dashboard
            </button>

          </div>
        </div>
      </header>

      <div className="flex">

        {/* SIDEBAR */}
        <aside className="sticky top-20 hidden h-[calc(100vh-80px)] w-[360px] shrink-0 overflow-y-auto border-r border-slate-200 bg-white lg:block">

          <div className="border-b border-slate-100 p-5">

            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Complete Course
            </p>

            <h1 className="mt-2 font-bold">
              Software Testing & Automation
            </h1>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-indigo-600 transition-all"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              {completedLessons.length} of{" "}
              {allLessons.length} lessons completed
            </p>

          </div>

          <div className="p-3">

            {modules.map((module) => {

              const isOpen =
                openModules.includes(module.id);

              const moduleCompleted =
                module.lessons.filter(
                  (lesson) =>
                    completedLessons.includes(
                      lesson.id
                    )
                ).length;

                const moduleProgress =
  module.lessons.length === 0
    ? 0
    : Math.round(
        (moduleCompleted / module.lessons.length) * 100
      );

              return (
                <div
                  key={module.id}
                  className="mb-2"
                >

                  <button
                    onClick={() =>
                      toggleModule(module.id)
                    }
                    className="flex w-full items-center justify-between rounded-xl bg-slate-50 p-4 text-left hover:bg-indigo-50"
                  >

                    <div className="flex items-center gap-3">

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-xs font-bold text-indigo-700">
                        {String(module.id).padStart(
                          2,
                          "0"
                        )}
                      </div>

                      <div>

                        <div className="text-sm font-bold">
                          {module.title}
                        </div>

                       <div className="mt-1 text-xs text-slate-400">
  {moduleCompleted}/{module.lessons.length} completed
</div>

<div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-slate-200">
  <div
    className="h-full rounded-full bg-indigo-500 transition-all duration-500"
    style={{ width: `${moduleProgress}%` }}
  />
</div>

<div className="mt-1 text-[10px] font-semibold text-indigo-600">
  {moduleProgress}% complete
</div>

                      </div>

                    </div>

                    <span className="text-slate-400">
                      {isOpen ? "⌃" : "⌄"}
                    </span>

                  </button>

                  {isOpen && (
                    <div className="ml-4 border-l border-slate-200 pl-3">

                      {module.lessons.map(
                        (lesson) => {

                          const isActive =
                            lesson.id ===
                            currentLessonId;

                          const isCompleted =
                            completedLessons.includes(
                              lesson.id);
                              const lessonIndex = allLessons.findIndex(
  (item) => item.id === lesson.id
);

const isUnlocked =
  lessonIndex === 0 ||
  completedLessons.includes(allLessons[lessonIndex - 1]?.id);
                              
                            

                          return (
                            <button
                             key={lesson.id}
  disabled={!isUnlocked}
  onClick={() => selectLesson(lesson.id)}
  className={`my-1 flex w-full items-center gap-3 rounded-xl p-3 text-left text-sm transition ${
    !isUnlocked
      ? "cursor-not-allowed opacity-50"
      : isActive
      ? "bg-indigo-600 font-semibold text-white"
      : "hover:bg-slate-50"
                              }`}
                            >

                              <span
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${
                                  isCompleted
                                    ? "bg-green-100 text-green-700"
                                    : isActive
                                    ? "bg-white/20 text-white"
                                    : "bg-slate-100 text-slate-500"
                                }`}
                              >
                               {isCompleted ? "✓" : !isUnlocked ? "🔒" : lesson.id}
                              </span>

                              <span>
                                {lesson.title}
                              </span>

                            </button>
                          );
                        }
                      )}

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </aside>

        {/* MAIN CONTENT */}
        <section className="min-w-0 flex-1">

          <div className="mx-auto max-w-6xl px-5 py-8 lg:px-10">

            {/* BREADCRUMB */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400">

              <span>Courses</span>
              <span>›</span>
              <span>
                Software Testing & Automation
              </span>
              <span>›</span>

              <span className="font-semibold text-slate-700">
                {currentLesson.title}
              </span>

            </div>

            {/* VIDEO */}
            <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 shadow-xl">

              <div className="text-center text-white">

                <button
                  onClick={() =>
                    alert(
                      "Video player integration will be connected here."
                    )
                  }
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-4xl backdrop-blur transition hover:scale-105 hover:bg-white/20"
                >
                  ▶
                </button>

                <h2 className="mt-7 text-2xl font-bold">
                  {currentLesson.title}
                </h2>

                <p className="mt-2 text-sm text-slate-300">
                  Lesson {currentIndex + 1} of{" "}
                  {allLessons.length}
                </p>

              </div>
            </div>

            {/* LESSON HEADER */}
            <div className="mt-8">

              <div className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                Lesson {currentIndex + 1}
              </div>

              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {currentLesson.title}
              </h1>

              <p className="mt-3 text-slate-500">
                Learn the concept with practical
                examples and interview-ready
                knowledge.
              </p>

            </div>

            {/* CONTENT */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

              <h2 className="text-2xl font-bold">
                Lesson Content
              </h2>

              <div className="mt-5 space-y-4">

                {currentLesson.content.map(
                  (paragraph, index) => (
                    <p
                      key={`${currentLesson.id}-content-${index}`}
                      className="text-[15px] leading-8 text-slate-600"
                    >
                      {paragraph}
                    </p>
                  )
                )}

              </div>

              {/* KEY POINTS */}
              <div className="mt-8 rounded-2xl bg-indigo-50 p-6">

                <h3 className="text-lg font-bold text-indigo-950">
                  Key Points
                </h3>

                <div className="mt-4 space-y-3">

                  {currentLesson.keyPoints.map(
                    (point, index) => (
                      <div
                        key={`${currentLesson.id}-point-${index}`}
                        className="flex items-start gap-3 text-sm text-slate-700"
                      >

                        <span className="mt-0.5 text-indigo-600">
                          ✓
                        </span>

                        <span>{point}</span>

                      </div>
                    )
                  )}

                </div>

              </div>

              {/* REAL WORLD EXAMPLE */}
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">

                <div className="text-sm font-bold uppercase tracking-wider text-amber-700">
                  💡 Real-World Example
                </div>

                <p className="mt-3 leading-7 text-slate-700">
                  {currentLesson.example}
                </p>

              </div>

            </div>

            {/* QUIZ */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

              <div className="flex flex-wrap items-center justify-between gap-4">

                <div>

                  <div className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                    Knowledge Check
                  </div>

                  <h2 className="mt-2 text-2xl font-bold">
                    Lesson Quiz
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Answer all 5 questions. You need at
                    least <strong>3 correct answers</strong>{" "}
                    to pass this lesson.
                  </p>

                </div>

                <div className="rounded-xl bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
                  {currentQuiz.length} Questions
                </div>

              </div>

              <div className="mt-7 space-y-6">

                {currentQuiz.map(
                  (quiz, questionIndex) => {

                    const selectedAnswer =
                      selectedAnswers[
                        questionIndex
                      ];

                    return (
                      <div
                        key={`${currentLesson.id}-${questionIndex}`}
                        className="rounded-2xl border border-slate-200 p-5"
                      >

                        <div className="flex gap-3">

                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-700">
                            {questionIndex + 1}
                          </span>

                          <h3 className="pt-1 text-base font-bold leading-6">
                            {quiz.question}
                          </h3>

                        </div>

                        <div className="mt-5 space-y-3">

                          {quiz.options.map(
                            (option, optionIndex) => {

                              const isSelected =
                                selectedAnswer ===
                                optionIndex;

                              const isCorrect =
                                quiz.answer ===
                                optionIndex;

                              let optionClass =
                                "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50";

                              if (
                                !quizSubmitted &&
                                isSelected
                              ) {
                                optionClass =
                                  "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-100";
                              }

                              if (
                                quizSubmitted &&
                                isCorrect
                              ) {
                                optionClass =
                                  "border-green-300 bg-green-50";
                              }

                              if (
                                quizSubmitted &&
                                isSelected &&
                                !isCorrect
                              ) {
                                optionClass =
                                  "border-red-300 bg-red-50";
                              }

                              return (
                                <button
                                  key={`${currentLesson.id}-${questionIndex}-${optionIndex}`}
                                  type="button"
                                  disabled={
                                    quizSubmitted
                                  }
                                  onClick={() => {

                                    const updated =
                                      [
                                        ...selectedAnswers,
                                      ];

                                    updated[
                                      questionIndex
                                    ] =
                                      optionIndex;

                                    setSelectedAnswers(
                                      updated
                                    );
                                  }}
                                  className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left text-sm transition ${optionClass}`}
                                >

                                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-bold">
                                    {String.fromCharCode(
                                      65 +
                                        optionIndex
                                    )}
                                  </span>

                                  <span className="flex-1">
                                    {option}
                                  </span>

                                  {quizSubmitted &&
                                    isCorrect && (
                                      <span className="font-bold text-green-600">
                                        ✓ Correct
                                      </span>
                                    )}

                                  {quizSubmitted &&
                                    isSelected &&
                                    !isCorrect && (
                                      <span className="font-bold text-red-600">
                                        ✕
                                      </span>
                                    )}

                                </button>
                              );
                            }
                          )}

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

              {/* SUBMIT */}
              {!quizSubmitted && (
                <button
                  type="button"
                  disabled={
                    selectedAnswers.length !==
                    currentQuiz.length
                  }
                  onClick={submitQuiz}
                  className="mt-8 w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                >
                  {selectedAnswers.length !==
                  currentQuiz.length
                    ? `Answer all questions (${selectedAnswers.length}/5)`
                    : "Submit Quiz"}
                </button>
              )}

              {/* RESULT */}
              {quizSubmitted && (
                <div
                  className={`mt-8 rounded-2xl border p-6 ${
                    quizScore >= 3
                      ? "border-green-200 bg-green-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                      <div
                        className={`text-xl font-bold ${
                          quizScore >= 3
                            ? "text-green-700"
                            : "text-red-700"
                        }`}
                      >
                        {quizScore >= 3
                          ? "🎉 Quiz Passed!"
                          : "❌ Quiz Failed"}
                      </div>

                      <p className="mt-2 text-sm text-slate-600">
                        Your Score:{" "}
                        <strong className="text-lg">
                          {quizScore}/5
                        </strong>
                      </p>

                      {quizScore >= 3 ? (
                        <p className="mt-2 text-sm text-green-700">
                          Great job! You can now mark
                          this lesson as complete.
                        </p>
                      ) : (
                        <p className="mt-2 text-sm text-red-700">
                          You need at least 3/5 to pass.
                          Review the lesson and try again.
                        </p>
                      )}

                    </div>

                    {quizScore < 3 && (
                      <button
                        type="button"
                        onClick={resetQuiz}
                        className="rounded-xl bg-white px-6 py-3 font-bold text-slate-900 shadow-sm transition hover:bg-slate-100"
                      >
                        🔄 Try Again
                      </button>
                    )}

                  </div>

                </div>
              )}

            </div>

            {/* NAVIGATION */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <button
                onClick={goPrevious}
                disabled={currentIndex === 0}
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-40 hover:border-indigo-300 hover:text-indigo-600"
              >
                ← Previous Lesson
              </button>

              <button
                onClick={markComplete}
                disabled={
                  completedLessons.includes(
                    currentLessonId
                  ) || !quizPassed
                }
                className={`rounded-xl px-7 py-3 font-bold transition ${
                  completedLessons.includes(
                    currentLessonId
                  )
                    ? "bg-green-100 text-green-700"
                    : !quizPassed
                    ? "cursor-not-allowed bg-slate-200 text-slate-400"
                    : "bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700"
                }`}
              >
                {completedLessons.includes(
                  currentLessonId
                )
                  ? "✓ Lesson Completed"
                  : !quizSubmitted
                  ? "Complete Quiz First"
                  : quizScore < 3
                  ? "Pass Quiz to Complete"
                  : "Mark as Complete ✓"}
              </button>

              <button
                onClick={goNext}
                disabled={
                  currentIndex ===
                  allLessons.length - 1
                }
                className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40 hover:bg-slate-800"
              >
                Next Lesson →
              </button>

            </div>

            {/* PROGRESS */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="font-bold">
                    Your Course Progress
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Keep going — you're building
                    job-ready testing skills.
                  </p>
                </div>

                <div className="text-2xl font-bold text-indigo-600">
                  {progress}%
                </div>

              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">

                <div
                  className="h-full rounded-full bg-indigo-600 transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

         {/* COURSE COMPLETION */}
{allLessonsCompleted && (
  <div className="mt-10 rounded-3xl border border-green-200 bg-white p-8 text-center shadow-sm sm:p-12">

    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100 text-4xl">
      🏆
    </div>

    <div className="mt-6 text-sm font-bold uppercase tracking-widest text-green-600">
      Course Completed
    </div>

    <h2 className="mt-2 text-3xl font-bold text-slate-900">
      Congratulations! 🎉
    </h2>

    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
      You have successfully completed the Software Testing & Automation
      course and all {allLessons.length} lessons.
    </p>

    <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-6 rounded-2xl bg-green-50 px-6 py-5">

      <div>
        <div className="text-2xl font-bold text-green-700">
          {allLessons.length}/{allLessons.length}
        </div>

        <div className="mt-1 text-xs font-semibold text-slate-500">
          Lessons Completed
        </div>
      </div>

      <div className="h-10 w-px bg-green-200" />

      <div>
        <div className="text-2xl font-bold text-green-700">
          100%
        </div>

        <div className="mt-1 text-xs font-semibold text-slate-500">
          Course Complete
        </div>
      </div>

    </div>

    <button
      type="button"
      onClick={generateCertificate}
      className="mt-7 rounded-xl bg-green-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-green-200 transition hover:bg-green-700"
    >
      🏆 Get Certificate
    </button>

  </div>
)}


            {/* MOBILE MODULES */}
            <div className="mt-8 lg:hidden">

              <h3 className="mb-4 text-lg font-bold">
                Course Modules
              </h3>

              <div className="space-y-3">

                {modules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => {
                      setOpenModules([
                        module.id,
                      ]);

                      selectLesson(
                        module.lessons[0].id
                      );
                    }}
                    className="w-full rounded-xl border border-slate-200 bg-white p-4 text-left"
                  >

                    <div className="font-bold">
                      {String(module.id).padStart(
                        2,
                        "0"
                      )}{" "}
                      · {module.title}
                    </div>

                    <div className="mt-1 text-xs text-slate-400">
                      {module.lessons.length} lessons
                    </div>

                  </button>
                ))}

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}

