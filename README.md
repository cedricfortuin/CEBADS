# CEBADS
#### Comprehensive Epilepsy Brain Analysis and Detection System

## Introduction

CEBADS is a comprehensive epilepsy brain analysis and detection system. It is a (web) application that allows users to
upload MRI scans and get analysis of the brain, stating if the current scan contains a tumor or not. The system is able
to detect the presence of epilepsy in the brain.

## Filestructure
The data folder contains the training and testing data. The training data is used to train the model, while the testing.
The structure is as follows:
<pre>
.
└── data
    ├── Testing
        (tumor types)
    │   ├── glioma
    │   ├── meningioma
    │   ├── notumor
    │   └── pituitary
    └── Training
        (tumor types)
        ├── glioma
        ├── meningioma
        ├── notumor
        └── pituitary
</pre>


## Copyright

This project is currently under development and is not yet ready for production. 
The project is developed by Cedric Fortuin and is currently not licensed.

<hr/>
© 2023 - Cedric Fortuin