const questions = [
    {
      question: "What is Supervised Learning?",
      answers: [
        { text: "A method where the model is trained on labeled data", correct: true },
        { text: "A method where the model learns without any labeled data", correct: false },
        { text: "A method where an agent learns from rewards and penalties", correct: false },
        { text: "A method to optimize a model’s loss function", correct: false }
      ]
    },
    {
      question: "What does Unsupervised Learning involve?",
      answers: [
        { text: "Learning from labeled data", correct: false },
        { text: "Finding patterns or clusters in data without labels", correct: true },
        { text: "Learning through trial and error with rewards", correct: false },
        { text: "Using labeled data to predict outputs", correct: false }
      ]
    },
    {
      question: "What is Reinforcement Learning?",
      answers: [
        { text: "A technique for dimensionality reduction", correct: false },
        { text: "A method where the model learns from labeled data", correct: false },
        { text: "A method where an agent learns through rewards and penalties", correct: true },
        { text: "A technique to prevent overfitting", correct: false }
      ]
    },
    {
      question: "Which task is related to Classification?",
      answers: [
        { text: "Predicting house prices", correct: false },
        { text: "Predicting continuous values", correct: false },
        { text: "Predicting a discrete label for a given input", correct: true },
        { text: "Finding clusters in unlabeled data", correct: false }
      ]
    },
    {
      question: "What is Regression used for?",
      answers: [
        { text: "Predicting a discrete label", correct: false },
        { text: "Predicting a continuous value", correct: true },
        { text: "Finding clusters in data", correct: false },
        { text: "Classifying objects into different categories", correct: false }
      ]
    },
    {
      question: "What does Overfitting refer to?",
      answers: [
        { text: "When a model learns the noise in the training data and performs poorly on new data", correct: true },
        { text: "When a model is too simple to capture the patterns in data", correct: false },
        { text: "When a model generalizes well to unseen data", correct: false },
        { text: "When the training data is too small for the model", correct: false }
      ]
    },
    {
      question: "What happens during Underfitting?",
      answers: [
        { text: "The model performs well on both training and testing data", correct: false },
        { text: "The model captures the noise in the data", correct: false },
        { text: "The model is too simple and fails to capture underlying patterns", correct: true },
        { text: "The model optimizes the loss function perfectly", correct: false }
      ]
    },
    {
      question: "What is Cross-Validation?",
      answers: [
        { text: "A method to evaluate a model by splitting the data into multiple training and testing sets", correct: true },
        { text: "A method to prevent overfitting by adding regularization", correct: false },
        { text: "A technique to reduce the dimensionality of data", correct: false },
        { text: "A technique to find clusters in unlabeled data", correct: false }
      ]
    },
    {
      question: "What does the Bias-Variance Tradeoff represent?",
      answers: [
        { text: "The balance between the model’s complexity and the amount of data", correct: false },
        { text: "The tradeoff between error due to bias and error due to variance", correct: true },
        { text: "The optimization of the loss function", correct: false },
        { text: "The splitting of data into training and testing sets", correct: false }
      ]
    },
    {
      question: "What is a Confusion Matrix used for?",
      answers: [
        { text: "It is a table that shows the precision and recall of a model", correct: false },
        { text: "It describes the performance of a classification model by showing true positives, false positives, true negatives, and false negatives", correct: true },
        { text: "It is a technique for evaluating regression models", correct: false },
        { text: "It is a method to balance bias and variance", correct: false }
      ]
    },
    {
      question: "What is Precision?",
      answers: [
        { text: "The ratio of true positives to all actual positives", correct: false },
        { text: "The ratio of correctly predicted positives to all predicted positives", correct: true },
        { text: "The ratio of correctly predicted negatives to all predicted negatives", correct: false },
        { text: "The ratio of true negatives to all negatives", correct: false }
      ]
    },
    {
      question: "What is Recall?",
      answers: [
        { text: "The ratio of correctly predicted positives to all predicted positives", correct: false },
        { text: "The ratio of true positives to all actual positives", correct: true },
        { text: "The ratio of true negatives to all predicted negatives", correct: false },
        { text: "The harmonic mean of precision and recall", correct: false }
      ]
    },
    {
      question: "What is the F1 Score?",
      answers: [
        { text: "The ratio of correctly predicted positives to all actual positives", correct: false },
        { text: "The ratio of true positives to all predicted positives", correct: false },
        { text: "The harmonic mean of precision and recall", correct: true },
        { text: "A technique to find clusters in the data", correct: false }
      ]
    },
    {
      question: "What does an ROC Curve represent?",
      answers: [
        { text: "A plot of true positive rate vs false positive rate at different thresholds", correct: true },
        { text: "A table that shows the true and false positives", correct: false },
        { text: "A measure of how well a classification model performs", correct: false },
        { text: "The ratio of true positives to all predicted positives", correct: false }
      ]
    },
    {
      question: "What does AUC represent?",
      answers: [
        { text: "The area under the accuracy curve", correct: false },
        { text: "The area under the ROC curve, measuring the overall performance of a model", correct: true },
        { text: "A method of cross-validation", correct: false },
        { text: "A way to regularize a model", correct: false }
      ]
    },
    {
      question: "What is Gradient Descent?",
      answers: [
        { text: "A clustering algorithm for unsupervised learning", correct: false },
        { text: "An optimization algorithm to minimize a loss function by iteratively moving in the direction of steepest descent", correct: true },
        { text: "A method to prevent overfitting by adding penalty terms", correct: false },
        { text: "A technique to split data into training and testing sets", correct: false }
      ]
    },
    {
      question: "What is the Learning Rate in machine learning?",
      answers: [
        { text: "The number of epochs used during training", correct: false },
        { text: "A hyperparameter that controls the step size during gradient descent updates", correct: true },
        { text: "A method for preventing overfitting", correct: false },
        { text: "The amount of data required for a model to learn effectively", correct: false }
      ]
    },
    {
      question: "What is a Loss Function?",
      answers: [
        { text: "A function that measures how far the model’s predictions are from the actual values", correct: true },
        { text: "A technique used to scale features", correct: false },
        { text: "A method to find clusters in the data", correct: false },
        { text: "A metric that measures model accuracy", correct: false }
      ]
    },
    {
      question: "What is Regularization?",
      answers: [
        { text: "A method to evaluate a model using a test set", correct: false },
        { text: "A technique to prevent overfitting by adding a penalty term to the loss function", correct: true },
        { text: "A method for scaling features to a similar range", correct: false },
        { text: "A way to increase the complexity of the model", correct: false }
      ]
    },
    {
      question: "What is L1 Regularization?",
      answers: [
        { text: "A technique that adds the absolute values of the model’s weights to the loss function", correct: true },
        { text: "A method that adds the squared values of the model’s weights to the loss function", correct: false },
        { text: "A technique that increases the number of training epochs", correct: false },
        { text: "A method for scaling data features", correct: false }
      ]
    },
    {
      question: "What is L2 Regularization?",
      answers: [
        { text: "A technique that adds the absolute values of the model’s weights to the loss function", correct: false },
        { text: "A technique that adds the squared values of the model’s weights to the loss function", correct: true },
        { text: "A method for reducing model complexity", correct: false },
        { text: "A clustering algorithm for unsupervised learning", correct: false }
      ]
    },
    {
      question: "What are Hyperparameters?",
      answers: [
        { text: "Parameters that are set before the learning process begins, like learning rate or number of epochs", correct: true },
        { text: "Parameters learned by the model during training", correct: false },
        { text: "Parameters that control the performance of the test set", correct: false },
        { text: "Parameters for scaling the input data", correct: false }
      ]
    },
    {
      question: "What are Epochs?",
      answers: [
        { text: "The number of times the entire training dataset is passed through the model during training", correct: true },
        { text: "The number of samples in a batch", correct: false },
        { text: "The number of layers in a deep learning model", correct: false },
        { text: "The amount of data required to train the model", correct: false }
      ]
    },
    {
      question: "What is Batch Size?",
      answers: [
        { text: "The number of layers in a deep learning model", correct: false },
        { text: "The number of samples the model processes before updating its parameters", correct: true },
        { text: "The total amount of data used during training", correct: false },
        { text: "The number of epochs used during training", correct: false }
      ]
    },
    {
      question: "What is Feature Scaling?",
      answers: [
        { text: "A method to optimize the loss function", correct: false },
        { text: "A process of normalizing or standardizing features so they are on the same scale", correct: true },
        { text: "A technique for clustering data", correct: false },
        { text: "A technique used to prevent overfitting", correct: false }
      ]
    },
    {
      question: "What is Principal Component Analysis (PCA)?",
      answers: [
        { text: "A supervised learning algorithm used for classification", correct: false },
        { text: "A dimensionality reduction technique that transforms data into principal components", correct: true },
        { text: "An optimization algorithm for minimizing loss", correct: false },
        { text: "A method for scaling data", correct: false }
      ]
    },
    {
      question: "What is a Support Vector Machine (SVM)?",
      answers: [
        { text: "A clustering algorithm for unsupervised learning", correct: false },
        { text: "A supervised learning algorithm that finds the optimal boundary to separate different classes", correct: true },
        { text: "A technique to reduce dimensionality of data", correct: false },
        { text: "A method used in reinforcement learning", correct: false }
      ]
    },
    {
      question: "What is K-Nearest Neighbors (KNN)?",
      answers: [
        { text: "A clustering algorithm for unsupervised learning", correct: false },
        { text: "A simple classification algorithm that classifies based on the majority class of the k-nearest data points", correct: true },
        { text: "A supervised learning algorithm for regression", correct: false },
        { text: "A method for reducing the dimensionality of data", correct: false }
      ]
    },
    {
      question: "What is a Decision Tree?",
      answers: [
        { text: "A clustering algorithm for unsupervised learning", correct: false },
        { text: "A model that splits data into branches based on feature values to make a decision", correct: true },
        { text: "A method for scaling input features", correct: false },
        { text: "A reinforcement learning method", correct: false }
      ]
    },
    {
      question: "What is K-Means Clustering?",
      answers: [
        { text: "A supervised learning algorithm for classification", correct: false },
        { text: "An unsupervised algorithm that partitions data into k clusters based on feature similarity", correct: true },
        { text: "A method used in reinforcement learning", correct: false },
        { text: "A supervised learning algorithm for regression", correct: false }
      ]
    }
  ];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo  = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Fixed broken line

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct; // Set data attribute for correct answer
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Clear previous buttons
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"; // Correct usage of dataset
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"; // Show the "Next" button after an answer is selected
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        StartQuiz();
    }
});

StartQuiz();