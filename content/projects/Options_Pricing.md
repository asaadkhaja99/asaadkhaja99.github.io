---
title: "Options Pricing Using Monte-Carlo and the Black-Scholes Model"
description: "A deep dive into implementing the Black-Scholes and Monte Carlo options pricing models and comparing their results against real data"
dateString: July 2024
draft: false
tags: ["NumPy", "Pandas", "Monte Carlo Simulation", "Options Pricing", "Exploratory Data Analysis"]
showToc: false
weight: 203
cover:
    image: "./projects/BS_model.png"
rank: 2
--- 
### 🔗 [Github Repository](https://github.com/asaadkhaja99/MC_Options_Pricing)

# Description
# Options Pricing using MC Simulations

This repository contains a Python project focussed on options pricing using Monte Carlo simulations and the Black Scholes model. It was meant as an exercise to deepen my understanding of how pricing models work and the relationship between implied volatility and actual market prices.

## Project Aims
 * Implement and compare two options pricing models: Monte Carlo (MC) simulations and the Black-Scholes model
 * Analyse implied volatility data and compare options prices predicted by the MC simulation with actual market prices
 * Plot the volatility smile and volatility surface and compare the plots to what is theoretically expected
 * The current analysis focused on American options of AAPL, consisting of various expiry dates and strike prices

## Project Structure
 * 'analysis.ipynb': Notebook containing the whole analysis, including data processing and implementations of pricing models
 * 'mc_pricing.ipynb': Notebook used to develop and test the MC and BS pricing models

 The option chain data for AAPL could not be added to the repository due to its large size, it can be found on [Kaggle](https://www.kaggle.com/datasets/kylegraupe/aapl-options-data-2016-2020/discussion?sort=hotness). 

## Method
The first part of this project was finding and cleaning data. Finding free and sharable historical option chain and price data was slightly difficult, but I chanced upon the Kaggle dataset by [Kyle Graupe](https://www.kaggle.com/kylegraupe) which had everything I needed. The data wasn't clean, there wrongly labled fields, with certain columns formated as objects rather than floats. I performed some exploratory data analysis to determine the extent of cleaning that would need to be done and used numpy to apply the necessary logic and formatting to clean the columns.

The second part was implementing the pricing models. The models were simple enough to implement, however the monte carlo model was an $O(n**2)$ operation and therefore took rather long to compute. I paralleised the monte carlo process using by setting up a numpy array of random numbers before calculating each step of the process.  

## Acknowledgements
This project was a practical exploration of the theories presented in Options, Futures, and Other Derivatives by John C. Hull. I also referred to existing implementations of specific aspects of the analysis. I have credited these sources in the `analysis.ipynb` notebook. If there are any mistakes, inaccuracies, or conceptual flaws in this project, feel free to submit a pull request or drop me a note at asaadkhaja99@gmail.com.

