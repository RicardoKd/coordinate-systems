# Practice #3

## Result of running the program

1. 0 < noise < 1
   ![1](./img/image1.png)
1. 0 < noise < 5
   ![2](./img/image2.png)
1. 0 < noise < 10
   ![3](./img/image3.png)

## Graph distribution of points

1. Trilateration
   ![4](./img/m1.png)

2. Triangulation
   ![5](./img/m2.png)

3. Gradient descent
   ![6](./img/m3.png)

4. Gradient descent with high rate
   ![7](./img/m4.png)

5. Gradient descent with more iterations
   ![8](./img/m5.png)

6. Gradient descent with Both high rate and more iterations
   ![9](./img/m6.png)

## Conclusion

Prerequisites: object coordinates = (3, 9)
Here is a list of accurace of the methods (most accurate at the top):

- Gradient Descent (high rate and more iterations) - most accurate results, but more performance needed.
- Gradient Descent (base) - gets very close values to the original coordinates.
- Gradient Descent (more iterations) - one of the best methods, thus number of iterations make the difference.
- Triangulation - usually has around 7 point near the original coordinates.
- Trilateration - usually has around 3 point near the original coordinates.
- Gradient Descent (high rate) - the worst method of all 6. Tends to point (0, 0).
