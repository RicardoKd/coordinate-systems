# Practice #2

## Result of running the program

Note, that here are presented only the results of execution of the `analyzeWindowSizes()` function.

- Result 1

  - Window size = 0 --> Mean square evaluation = 0.624999999999999
  - Window size = 1 --> Mean square evaluation = 0.32933872130682196
  - Window size = 2 --> Mean square evaluation = 0.16999383096631573
  - Window size = 3 --> Mean square evaluation = 0.11749916160552026
  - Window size = 4 --> Mean square evaluation = 0.10004560651034113
  - Window size = 5 --> Mean square evaluation = 0.08817841711658858
  - Window size = 6 --> Mean square evaluation = 0.09491906564302569
  - Window size = 7 --> Mean square evaluation = 0.09404225169175123
  - Window size = 8 --> Mean square evaluation = 0.11251161724471252
  - Window size = 9 --> Mean square evaluation = 0.11708325905085329

- Result 2

  - Window size = 0 --> Mean square evaluation = 0.624999999999999
  - Window size = 1 --> Mean square evaluation = 0.3313574592063987
  - Window size = 2 --> Mean square evaluation = 0.16940749162316113
  - Window size = 3 --> Mean square evaluation = 0.11555926805906426
  - Window size = 4 --> Mean square evaluation = 0.09786797601659512
  - Window size = 5 --> Mean square evaluation = 0.08542458401947246
  - Window size = 6 --> Mean square evaluation = 0.09028821938402538
  - Window size = 7 --> Mean square evaluation = 0.0885266146534446
  - Window size = 8 --> Mean square evaluation = 0.1052489578074582
  - Window size = 9 --> Mean square evaluation = 0.10916410322571085

- Result 3

  - Window size = 0 --> Mean square evaluation = 0.624999999999999
  - Window size = 1 --> Mean square evaluation = 0.33052781376044615
  - Window size = 2 --> Mean square evaluation = 0.16620985116076267
  - Window size = 3 --> Mean square evaluation = 0.11266880461344778
  - Window size = 4 --> Mean square evaluation = 0.09408064818920778
  - Window size = 5 --> Mean square evaluation = 0.082305076646426
  - Window size = 6 --> Mean square evaluation = 0.08753894599517888
  - Window size = 7 --> Mean square evaluation = 0.0864415777701185
  - Window size = 8 --> Mean square evaluation = 0.10336401840129597
  - Window size = 9 --> Mean square evaluation = 0.10740812718917524

## Conclusion

To evaluate the best window size for the filter, I untroduced a `analyzeWindowSizes()` function. It check 10 window sizes (from 0 to 9). From the result of execution of this function, it can be seen that the value 5 gives the best mean square evaluation. It means that with this value the noise is maximally reduced while the signal is minimally distorted by the work of the filter. It is worth mentioning that value 7 for window size is also a good one, however, not as good as value 5.
