

```python
# PyCity Schools Analysis
##  Math scores are generally lower than reading scores
## Smaller schools have better average grades and pass rates
## Charter schools have better average grades and pass rates
```


```python
import pandas as pd
import numpy as np
import os
```


```python
students_csv_path = os.path.join('raw_data', 'students_complete.csv')
schools_csv_path = os.path.join('raw_data', 'schools_complete.csv')
students_df = pd.read_csv(students_csv_path)
schools_df = pd.read_csv(schools_csv_path)
print(students_df.head(3))
print(schools_df)
```

       Student ID             name gender grade             school  reading_score  \
    0           0     Paul Bradley      M   9th  Huang High School             66   
    1           1     Victor Smith      M  12th  Huang High School             94   
    2           2  Kevin Rodriguez      M  12th  Huang High School             90   
    
       math_score  
    0          79  
    1          61  
    2          60  
        School ID                   name      type  size   budget
    0           0      Huang High School  District  2917  1910635
    1           1   Figueroa High School  District  2949  1884411
    2           2    Shelton High School   Charter  1761  1056600
    3           3  Hernandez High School  District  4635  3022020
    4           4    Griffin High School   Charter  1468   917500
    5           5     Wilson High School   Charter  2283  1319574
    6           6    Cabrera High School   Charter  1858  1081356
    7           7     Bailey High School  District  4976  3124928
    8           8     Holden High School   Charter   427   248087
    9           9       Pena High School   Charter   962   585858
    10         10     Wright High School   Charter  1800  1049400
    11         11  Rodriguez High School  District  3999  2547363
    12         12    Johnson High School  District  4761  3094650
    13         13       Ford High School  District  2739  1763916
    14         14     Thomas High School   Charter  1635  1043130
    


```python
# District Summary
```


```python
total_schools = len(schools_df)
total_students = schools_df['size'].sum()
total_budget = schools_df['budget'].sum()
avg_math_score = students_df['math_score'].mean()
avg_reading_score = students_df['reading_score'].mean()
perc_passing_math = len(students_df[students_df['math_score'] >= 70]) / total_students
perc_passing_reading = len(students_df[students_df['reading_score'] >= 70]) / total_students
perc_overall_passing = (perc_passing_math + perc_passing_reading) / 2

district_summary_df = pd.DataFrame({'Total Schools': total_schools,
                                    'Total Students': total_students,
                                    'Total Budget': total_budget,
                                    'Average Math Score': avg_math_score,
                                    'Average Reading Score': avg_reading_score,
                                    '% Passing Math': perc_passing_math,
                                    '% Passing Reading': perc_passing_reading,
                                    '% Overall Passing Rate': perc_overall_passing}, index=[0])
district_summary_df = district_summary_df[['Total Schools',
                                           'Total Students',
                                           'Total Budget',
                                           'Average Math Score',
                                           'Average Reading Score',
                                           '% Passing Math',
                                           '% Passing Reading',
                                           '% Overall Passing Rate']]
district_summary_df
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Total Schools</th>
      <th>Total Students</th>
      <th>Total Budget</th>
      <th>Average Math Score</th>
      <th>Average Reading Score</th>
      <th>% Passing Math</th>
      <th>% Passing Reading</th>
      <th>% Overall Passing Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>15</td>
      <td>39170</td>
      <td>24649428</td>
      <td>78.985371</td>
      <td>81.87784</td>
      <td>0.749809</td>
      <td>0.858055</td>
      <td>0.803932</td>
    </tr>
  </tbody>
</table>
</div>




```python
# School Summary
```


```python
school_summary_df = pd.DataFrame()
for school in schools_df['name']:
    temp_school_df = schools_df[schools_df['name'] == school]
    temp_school_df.drop('School ID', axis=1, inplace=True)
    temp_school_df['Per Student Budget'] = temp_school_df['budget'] / temp_school_df['size']
    temp_students_df = students_df[students_df['school'] == school]
    total_students = len(temp_students_df)
    avg_math_score = temp_students_df['math_score'].mean()
    avg_reading_score = temp_students_df['reading_score'].mean()
    perc_passing_math = len(temp_students_df[temp_students_df['math_score'] >= 70]) / total_students
    perc_passing_reading = len(temp_students_df[temp_students_df['reading_score'] >= 70]) / total_students
    perc_overall_passing = (perc_passing_math + perc_passing_reading) / 2    
    temp_student_summary_df = pd.DataFrame({'name': school,
                                            'Average Math Score': avg_math_score,
                                            'Average Reading Score': avg_reading_score,
                                            '% Passing Math': perc_passing_math,
                                            '% Passing Reading': perc_passing_reading,
                                            '% Overall Passing Rate': perc_overall_passing}, index=[0])
    temp_student_summary_df = temp_student_summary_df[['name',
                                                       'Average Math Score',
                                                       'Average Reading Score',
                                                       '% Passing Math',
                                                       '% Passing Reading',
                                                       '% Overall Passing Rate']]
    temp_school_df = temp_school_df.merge(temp_student_summary_df, on='name')
    school_summary_df = pd.concat([school_summary_df, temp_school_df])
    
school_summary_df.columns = ['School',
                             'Type',
                             'Total Students',
                             'Total School Budget',
                             'Per Student Budget',
                             'Average Math Score',
                             'Average Reading Score',
                             '% Passing Reading',
                             '% Passing Math',
                             '% Overall Passing Rates']
school_summary_df.set_index('School', inplace=True)
del school_summary_df.index.name
school_summary_df
```

    C:\Users\markg\Anaconda3\envs\py36\lib\site-packages\ipykernel_launcher.py:4: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame
    
    See the caveats in the documentation: http://pandas.pydata.org/pandas-docs/stable/indexing.html#indexing-view-versus-copy
      after removing the cwd from sys.path.
    C:\Users\markg\Anaconda3\envs\py36\lib\site-packages\ipykernel_launcher.py:5: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: http://pandas.pydata.org/pandas-docs/stable/indexing.html#indexing-view-versus-copy
      """
    




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Type</th>
      <th>Total Students</th>
      <th>Total School Budget</th>
      <th>Per Student Budget</th>
      <th>Average Math Score</th>
      <th>Average Reading Score</th>
      <th>% Passing Reading</th>
      <th>% Passing Math</th>
      <th>% Overall Passing Rates</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Huang High School</th>
      <td>District</td>
      <td>2917</td>
      <td>1910635</td>
      <td>655.0</td>
      <td>76.629414</td>
      <td>81.182722</td>
      <td>0.656839</td>
      <td>0.813164</td>
      <td>0.735002</td>
    </tr>
    <tr>
      <th>Figueroa High School</th>
      <td>District</td>
      <td>2949</td>
      <td>1884411</td>
      <td>639.0</td>
      <td>76.711767</td>
      <td>81.158020</td>
      <td>0.659885</td>
      <td>0.807392</td>
      <td>0.733639</td>
    </tr>
    <tr>
      <th>Shelton High School</th>
      <td>Charter</td>
      <td>1761</td>
      <td>1056600</td>
      <td>600.0</td>
      <td>83.359455</td>
      <td>83.725724</td>
      <td>0.938671</td>
      <td>0.958546</td>
      <td>0.948609</td>
    </tr>
    <tr>
      <th>Hernandez High School</th>
      <td>District</td>
      <td>4635</td>
      <td>3022020</td>
      <td>652.0</td>
      <td>77.289752</td>
      <td>80.934412</td>
      <td>0.667530</td>
      <td>0.808630</td>
      <td>0.738080</td>
    </tr>
    <tr>
      <th>Griffin High School</th>
      <td>Charter</td>
      <td>1468</td>
      <td>917500</td>
      <td>625.0</td>
      <td>83.351499</td>
      <td>83.816757</td>
      <td>0.933924</td>
      <td>0.971390</td>
      <td>0.952657</td>
    </tr>
    <tr>
      <th>Wilson High School</th>
      <td>Charter</td>
      <td>2283</td>
      <td>1319574</td>
      <td>578.0</td>
      <td>83.274201</td>
      <td>83.989488</td>
      <td>0.938677</td>
      <td>0.965396</td>
      <td>0.952037</td>
    </tr>
    <tr>
      <th>Cabrera High School</th>
      <td>Charter</td>
      <td>1858</td>
      <td>1081356</td>
      <td>582.0</td>
      <td>83.061895</td>
      <td>83.975780</td>
      <td>0.941335</td>
      <td>0.970398</td>
      <td>0.955867</td>
    </tr>
    <tr>
      <th>Bailey High School</th>
      <td>District</td>
      <td>4976</td>
      <td>3124928</td>
      <td>628.0</td>
      <td>77.048432</td>
      <td>81.033963</td>
      <td>0.666801</td>
      <td>0.819333</td>
      <td>0.743067</td>
    </tr>
    <tr>
      <th>Holden High School</th>
      <td>Charter</td>
      <td>427</td>
      <td>248087</td>
      <td>581.0</td>
      <td>83.803279</td>
      <td>83.814988</td>
      <td>0.925059</td>
      <td>0.962529</td>
      <td>0.943794</td>
    </tr>
    <tr>
      <th>Pena High School</th>
      <td>Charter</td>
      <td>962</td>
      <td>585858</td>
      <td>609.0</td>
      <td>83.839917</td>
      <td>84.044699</td>
      <td>0.945946</td>
      <td>0.959459</td>
      <td>0.952703</td>
    </tr>
    <tr>
      <th>Wright High School</th>
      <td>Charter</td>
      <td>1800</td>
      <td>1049400</td>
      <td>583.0</td>
      <td>83.682222</td>
      <td>83.955000</td>
      <td>0.933333</td>
      <td>0.966111</td>
      <td>0.949722</td>
    </tr>
    <tr>
      <th>Rodriguez High School</th>
      <td>District</td>
      <td>3999</td>
      <td>2547363</td>
      <td>637.0</td>
      <td>76.842711</td>
      <td>80.744686</td>
      <td>0.663666</td>
      <td>0.802201</td>
      <td>0.732933</td>
    </tr>
    <tr>
      <th>Johnson High School</th>
      <td>District</td>
      <td>4761</td>
      <td>3094650</td>
      <td>650.0</td>
      <td>77.072464</td>
      <td>80.966394</td>
      <td>0.660576</td>
      <td>0.812224</td>
      <td>0.736400</td>
    </tr>
    <tr>
      <th>Ford High School</th>
      <td>District</td>
      <td>2739</td>
      <td>1763916</td>
      <td>644.0</td>
      <td>77.102592</td>
      <td>80.746258</td>
      <td>0.683096</td>
      <td>0.792990</td>
      <td>0.738043</td>
    </tr>
    <tr>
      <th>Thomas High School</th>
      <td>Charter</td>
      <td>1635</td>
      <td>1043130</td>
      <td>638.0</td>
      <td>83.418349</td>
      <td>83.848930</td>
      <td>0.932722</td>
      <td>0.973089</td>
      <td>0.952905</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Top Performing Schools (By Passing Rate)
```


```python
top_performing_schools_df = school_summary_df.copy()
top_performing_schools_df.sort_values('% Overall Passing Rates', ascending=False, inplace=True)
top_performing_schools_df = top_performing_schools_df.head(5)
top_performing_schools_df
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Type</th>
      <th>Total Students</th>
      <th>Total School Budget</th>
      <th>Per Student Budget</th>
      <th>Average Math Score</th>
      <th>Average Reading Score</th>
      <th>% Passing Reading</th>
      <th>% Passing Math</th>
      <th>% Overall Passing Rates</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Cabrera High School</th>
      <td>Charter</td>
      <td>1858</td>
      <td>1081356</td>
      <td>582.0</td>
      <td>83.061895</td>
      <td>83.975780</td>
      <td>0.941335</td>
      <td>0.970398</td>
      <td>0.955867</td>
    </tr>
    <tr>
      <th>Thomas High School</th>
      <td>Charter</td>
      <td>1635</td>
      <td>1043130</td>
      <td>638.0</td>
      <td>83.418349</td>
      <td>83.848930</td>
      <td>0.932722</td>
      <td>0.973089</td>
      <td>0.952905</td>
    </tr>
    <tr>
      <th>Pena High School</th>
      <td>Charter</td>
      <td>962</td>
      <td>585858</td>
      <td>609.0</td>
      <td>83.839917</td>
      <td>84.044699</td>
      <td>0.945946</td>
      <td>0.959459</td>
      <td>0.952703</td>
    </tr>
    <tr>
      <th>Griffin High School</th>
      <td>Charter</td>
      <td>1468</td>
      <td>917500</td>
      <td>625.0</td>
      <td>83.351499</td>
      <td>83.816757</td>
      <td>0.933924</td>
      <td>0.971390</td>
      <td>0.952657</td>
    </tr>
    <tr>
      <th>Wilson High School</th>
      <td>Charter</td>
      <td>2283</td>
      <td>1319574</td>
      <td>578.0</td>
      <td>83.274201</td>
      <td>83.989488</td>
      <td>0.938677</td>
      <td>0.965396</td>
      <td>0.952037</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Bottom Performing Schools (By Passing Rate)
```


```python
bottom_performing_schools_df = school_summary_df.copy()
bottom_performing_schools_df.sort_values('% Overall Passing Rates', inplace=True)
bottom_performing_schools_df = bottom_performing_schools_df.head(5)
bottom_performing_schools_df
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Type</th>
      <th>Total Students</th>
      <th>Total School Budget</th>
      <th>Per Student Budget</th>
      <th>Average Math Score</th>
      <th>Average Reading Score</th>
      <th>% Passing Reading</th>
      <th>% Passing Math</th>
      <th>% Overall Passing Rates</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Rodriguez High School</th>
      <td>District</td>
      <td>3999</td>
      <td>2547363</td>
      <td>637.0</td>
      <td>76.842711</td>
      <td>80.744686</td>
      <td>0.663666</td>
      <td>0.802201</td>
      <td>0.732933</td>
    </tr>
    <tr>
      <th>Figueroa High School</th>
      <td>District</td>
      <td>2949</td>
      <td>1884411</td>
      <td>639.0</td>
      <td>76.711767</td>
      <td>81.158020</td>
      <td>0.659885</td>
      <td>0.807392</td>
      <td>0.733639</td>
    </tr>
    <tr>
      <th>Huang High School</th>
      <td>District</td>
      <td>2917</td>
      <td>1910635</td>
      <td>655.0</td>
      <td>76.629414</td>
      <td>81.182722</td>
      <td>0.656839</td>
      <td>0.813164</td>
      <td>0.735002</td>
    </tr>
    <tr>
      <th>Johnson High School</th>
      <td>District</td>
      <td>4761</td>
      <td>3094650</td>
      <td>650.0</td>
      <td>77.072464</td>
      <td>80.966394</td>
      <td>0.660576</td>
      <td>0.812224</td>
      <td>0.736400</td>
    </tr>
    <tr>
      <th>Ford High School</th>
      <td>District</td>
      <td>2739</td>
      <td>1763916</td>
      <td>644.0</td>
      <td>77.102592</td>
      <td>80.746258</td>
      <td>0.683096</td>
      <td>0.792990</td>
      <td>0.738043</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Math Scores by Grade
```


```python
math_grade_pivot = pd.pivot_table(students_df, values='math_score', index=['school'],
                                  columns=['grade'], aggfunc=np.mean)
#school_grade_pivot.set_index('school', inplace=True)

math_grade_pivot.index.name = None

cols = ['9th', '10th', '11th', '12th']
math_grade_pivot = math_grade_pivot[cols]
math_grade_pivot.columns = cols
math_grade_pivot
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>9th</th>
      <th>10th</th>
      <th>11th</th>
      <th>12th</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Bailey High School</th>
      <td>77.083676</td>
      <td>76.996772</td>
      <td>77.515588</td>
      <td>76.492218</td>
    </tr>
    <tr>
      <th>Cabrera High School</th>
      <td>83.094697</td>
      <td>83.154506</td>
      <td>82.765560</td>
      <td>83.277487</td>
    </tr>
    <tr>
      <th>Figueroa High School</th>
      <td>76.403037</td>
      <td>76.539974</td>
      <td>76.884344</td>
      <td>77.151369</td>
    </tr>
    <tr>
      <th>Ford High School</th>
      <td>77.361345</td>
      <td>77.672316</td>
      <td>76.918058</td>
      <td>76.179963</td>
    </tr>
    <tr>
      <th>Griffin High School</th>
      <td>82.044010</td>
      <td>84.229064</td>
      <td>83.842105</td>
      <td>83.356164</td>
    </tr>
    <tr>
      <th>Hernandez High School</th>
      <td>77.438495</td>
      <td>77.337408</td>
      <td>77.136029</td>
      <td>77.186567</td>
    </tr>
    <tr>
      <th>Holden High School</th>
      <td>83.787402</td>
      <td>83.429825</td>
      <td>85.000000</td>
      <td>82.855422</td>
    </tr>
    <tr>
      <th>Huang High School</th>
      <td>77.027251</td>
      <td>75.908735</td>
      <td>76.446602</td>
      <td>77.225641</td>
    </tr>
    <tr>
      <th>Johnson High School</th>
      <td>77.187857</td>
      <td>76.691117</td>
      <td>77.491653</td>
      <td>76.863248</td>
    </tr>
    <tr>
      <th>Pena High School</th>
      <td>83.625455</td>
      <td>83.372000</td>
      <td>84.328125</td>
      <td>84.121547</td>
    </tr>
    <tr>
      <th>Rodriguez High School</th>
      <td>76.859966</td>
      <td>76.612500</td>
      <td>76.395626</td>
      <td>77.690748</td>
    </tr>
    <tr>
      <th>Shelton High School</th>
      <td>83.420755</td>
      <td>82.917411</td>
      <td>83.383495</td>
      <td>83.778976</td>
    </tr>
    <tr>
      <th>Thomas High School</th>
      <td>83.590022</td>
      <td>83.087886</td>
      <td>83.498795</td>
      <td>83.497041</td>
    </tr>
    <tr>
      <th>Wilson High School</th>
      <td>83.085578</td>
      <td>83.724422</td>
      <td>83.195326</td>
      <td>83.035794</td>
    </tr>
    <tr>
      <th>Wright High School</th>
      <td>83.264706</td>
      <td>84.010288</td>
      <td>83.836782</td>
      <td>83.644986</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Reading Scores by Grade
```


```python
reading_grade_pivot = pd.pivot_table(students_df, values='reading_score', index=['school'],
                                    columns=['grade'], aggfunc=np.mean)
#school_grade_pivot.set_index('school', inplace=True)

reading_grade_pivot.index.name = None

cols = ['9th', '10th', '11th', '12th']
reading_grade_pivot = reading_grade_pivot[cols]
reading_grade_pivot.columns = cols
reading_grade_pivot
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>9th</th>
      <th>10th</th>
      <th>11th</th>
      <th>12th</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Bailey High School</th>
      <td>81.303155</td>
      <td>80.907183</td>
      <td>80.945643</td>
      <td>80.912451</td>
    </tr>
    <tr>
      <th>Cabrera High School</th>
      <td>83.676136</td>
      <td>84.253219</td>
      <td>83.788382</td>
      <td>84.287958</td>
    </tr>
    <tr>
      <th>Figueroa High School</th>
      <td>81.198598</td>
      <td>81.408912</td>
      <td>80.640339</td>
      <td>81.384863</td>
    </tr>
    <tr>
      <th>Ford High School</th>
      <td>80.632653</td>
      <td>81.262712</td>
      <td>80.403642</td>
      <td>80.662338</td>
    </tr>
    <tr>
      <th>Griffin High School</th>
      <td>83.369193</td>
      <td>83.706897</td>
      <td>84.288089</td>
      <td>84.013699</td>
    </tr>
    <tr>
      <th>Hernandez High School</th>
      <td>80.866860</td>
      <td>80.660147</td>
      <td>81.396140</td>
      <td>80.857143</td>
    </tr>
    <tr>
      <th>Holden High School</th>
      <td>83.677165</td>
      <td>83.324561</td>
      <td>83.815534</td>
      <td>84.698795</td>
    </tr>
    <tr>
      <th>Huang High School</th>
      <td>81.290284</td>
      <td>81.512386</td>
      <td>81.417476</td>
      <td>80.305983</td>
    </tr>
    <tr>
      <th>Johnson High School</th>
      <td>81.260714</td>
      <td>80.773431</td>
      <td>80.616027</td>
      <td>81.227564</td>
    </tr>
    <tr>
      <th>Pena High School</th>
      <td>83.807273</td>
      <td>83.612000</td>
      <td>84.335938</td>
      <td>84.591160</td>
    </tr>
    <tr>
      <th>Rodriguez High School</th>
      <td>80.993127</td>
      <td>80.629808</td>
      <td>80.864811</td>
      <td>80.376426</td>
    </tr>
    <tr>
      <th>Shelton High School</th>
      <td>84.122642</td>
      <td>83.441964</td>
      <td>84.373786</td>
      <td>82.781671</td>
    </tr>
    <tr>
      <th>Thomas High School</th>
      <td>83.728850</td>
      <td>84.254157</td>
      <td>83.585542</td>
      <td>83.831361</td>
    </tr>
    <tr>
      <th>Wilson High School</th>
      <td>83.939778</td>
      <td>84.021452</td>
      <td>83.764608</td>
      <td>84.317673</td>
    </tr>
    <tr>
      <th>Wright High School</th>
      <td>83.833333</td>
      <td>83.812757</td>
      <td>84.156322</td>
      <td>84.073171</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Scores by School Spending
```


```python
school_summary_df['Spending Ranges (Per Student)'] = pd.cut(school_summary_df['Total\xa0School Budget'], 3)
budget_bin_groupby = school_summary_df.groupby('Spending Ranges (Per Student)')
school_budget_summary_df = budget_bin_groupby.mean()
cols = ['Average\xa0Math\xa0Score',
        'Average\xa0Reading\xa0Score',
        '%\xa0Passing\xa0Reading',
        '%\xa0Passing\xa0Math',
        '%\xa0Overall\xa0Passing\xa0Rates']
school_budget_summary_df = school_budget_summary_df[cols]
school_budget_summary_df
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Average Math Score</th>
      <th>Average Reading Score</th>
      <th>% Passing Reading</th>
      <th>% Passing Math</th>
      <th>% Overall Passing Rates</th>
    </tr>
    <tr>
      <th>Spending Ranges (Per Student)</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>(245210.159, 1207034.0]</th>
      <td>83.502373</td>
      <td>83.883125</td>
      <td>0.935856</td>
      <td>0.965932</td>
      <td>0.950894</td>
    </tr>
    <tr>
      <th>(1207034.0, 2165981.0]</th>
      <td>78.429493</td>
      <td>81.769122</td>
      <td>0.734624</td>
      <td>0.844736</td>
      <td>0.789680</td>
    </tr>
    <tr>
      <th>(2165981.0, 3124928.0]</th>
      <td>77.063340</td>
      <td>80.919864</td>
      <td>0.664643</td>
      <td>0.810597</td>
      <td>0.737620</td>
    </tr>
  </tbody>
</table>
</div>




```python
school_summary_df['School Size'] = pd.cut(school_summary_df['Total\xa0Students'], 3)
size_bin_groupby = school_summary_df.groupby('School Size')
school_size_summary_df = size_bin_groupby.mean()
cols = ['Average\xa0Math\xa0Score',
        'Average\xa0Reading\xa0Score',
        '%\xa0Passing\xa0Reading',
        '%\xa0Passing\xa0Math',
        '%\xa0Overall\xa0Passing\xa0Rates']
school_size_summary_df = school_size_summary_df[cols]
school_size_summary_df
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Average Math Score</th>
      <th>Average Reading Score</th>
      <th>% Passing Reading</th>
      <th>% Passing Math</th>
      <th>% Overall Passing Rates</th>
    </tr>
    <tr>
      <th>School Size</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>(422.451, 1943.333]</th>
      <td>83.502373</td>
      <td>83.883125</td>
      <td>0.935856</td>
      <td>0.965932</td>
      <td>0.950894</td>
    </tr>
    <tr>
      <th>(1943.333, 3459.667]</th>
      <td>78.429493</td>
      <td>81.769122</td>
      <td>0.734624</td>
      <td>0.844736</td>
      <td>0.789680</td>
    </tr>
    <tr>
      <th>(3459.667, 4976.0]</th>
      <td>77.063340</td>
      <td>80.919864</td>
      <td>0.664643</td>
      <td>0.810597</td>
      <td>0.737620</td>
    </tr>
  </tbody>
</table>
</div>




```python
type_groupby = school_summary_df.groupby('Type')
school_type_summary_df = type_groupby.mean()
cols = ['Average\xa0Math\xa0Score',
        'Average\xa0Reading\xa0Score',
        '%\xa0Passing\xa0Reading',
        '%\xa0Passing\xa0Math',
        '%\xa0Overall\xa0Passing\xa0Rates']
school_type_summary_df = school_type_summary_df[cols]
school_type_summary_df.index.name = 'School Type'
school_type_summary_df
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Average Math Score</th>
      <th>Average Reading Score</th>
      <th>% Passing Reading</th>
      <th>% Passing Math</th>
      <th>% Overall Passing Rates</th>
    </tr>
    <tr>
      <th>School Type</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Charter</th>
      <td>83.473852</td>
      <td>83.896421</td>
      <td>0.936208</td>
      <td>0.965865</td>
      <td>0.951037</td>
    </tr>
    <tr>
      <th>District</th>
      <td>76.956733</td>
      <td>80.966636</td>
      <td>0.665485</td>
      <td>0.807991</td>
      <td>0.736738</td>
    </tr>
  </tbody>
</table>
</div>


