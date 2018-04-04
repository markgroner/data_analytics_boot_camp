# Tensor Flow Playground

## Instructions

* Choose any of the datasets below the **Data** heading to train the network on.

  * Determine good decision boundaries for your selected data set with your partner before moving on.

* Below **Features**, select only the top two features (x<sub>1</sub> and x<sub>2</sub>).

* Click the "play" button in the top left.

  * Observe the **Output** image. What happens as the network learns?

* Each neuron has an image associated with it. What does this image represent?

* Experiment with the **Features** you feed to the network.

  * Under **Features**, add x<sub>1</sub>x<sub>2</sub> (the fifth feature from the top), and retrain the model. What happens?

  * Deselect x<sub>1</sub>x<sub>2</sub> as a feature, and select sin(x<sub>1</sub>) (the second to last feature), and retrain the model. What happens?

  * Deselect sin(x<sub>1</sub>) as a feature, and select sin(x<sub>1</sub>) (the second to last feature), and retrain the model. What happens?

  * What conclusions can you draw about inputs to a neural network?

* Revert to training your network on only x<sub>1</sub> and x<sub>2</sub>.

* Experiment with the number of neurons in your hidden layers.

  * Use only 2 neurons in your hidden layer. What happens?

  * Retrain the model using 4 neurons. Does anything change?

  * Retrain the model using 6 neurons. Does anything change this time?

* Experiment with the number of hidden layers in your network. Set your network to use a single hidden layer of 2 neurons, and train it with only x<sub>1</sub> and x<sub>2</sub>.

  * What happens if you train the model with 2 neurons in the hidden layer?

  * What happens if train the model with 4 neurons in the hidden layer? What about 6?

  * Add a hidden layer to the network. Use 2 neurons in each layer. What happens?

  * What happens if you use 4 neurons in the second layer, but only 2 in the first? 6 in the second, but only 2 in the first?

  * What happens if you use 4 neurons in the first layer, but only 2 in the second? 6 in the first, and 2 in the second?

* After exploring the playground, prepare answers to the following questions.

  * Explain what the neural network "does" as it evolves. What does it mean to say that the network "learns"?

  * There should be a difference between 3-layer networks whose middle layer contains only two neurons and those whose middle layer contains four. What differences do you observe? Can you explain them?

  * Consider a 4-layer network, N<sub>1</sub>, whose first and second hidden layers contain 2 and 4 neurons, respectively. Consider as well a similar 4-layer network, N<sub>2</sub>, whose first and second hidden layers contain 4 and 2 neurons, respectively. Build N<sub>1</sub> and N<sub>2</sub>, and describe the differences in training each on the same data sets and hyperparameters.
