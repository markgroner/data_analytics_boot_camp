students_df <- read_csv('1/06_Stu_Tibble/students.csv')
schools_df <- read_csv('1/06_Stu_Tibble/schools.csv')
View(students_df)
View(schools_df)

"A list of all schools"
school_names <- schools_df[['school_name']]
school_names

"Calculate the total count of schools"
num_schools <- nrow(schools_df)
num_schools

"Calculate the total number of students"
num_students <- nrow(students_df)
num_students

"Calculate the average reading and math scores"
mean_math <- mean(students_df[["math_score"]])
mean_math
mean_reading <- mean(students_df[["reading_score"]])
mean_reading

"Calculate the percentage of students with passing reading scores, i.e. over 70%."
passing_reading <- filter(students_df, reading_score > 70)
num_passing_reading <- nrow(passing_reading)
num_passing_reading

"Calculate the percentage of students with passing math scores, i.e. over 70%."
passing_math <- filter(students_df, math_score > 70)
num_passing_math <- nrow(passing_math)
num_passing_math


"Calculate the overall passing rate, i.e. the average of math and reading passing percentages"
passing_both <- filter(students_df, reading_score > 70, math_score > 70)
num_passing_both <- nrow(passing_both)
num_passing_both