from __future__ import print_function

# A

student_data = [
    {'name': 'Bob', 'id': 0, 'scores': [68, 75, 56, 81]},
    {'name': 'Alice', 'id': 1,  'scores': [75, 90, 64, 88]},
    {'name': 'Carol', 'id': 2, 'scores': [59, 74, 71, 68]},
    {'name': 'Dan', 'id': 3, 'scores': [64, 58, 53, 62]},
]

# B


def process_student_data(data, pass_threshold=60, merit_threshold=75):
    """ Perform basic stats on come student data """

    # C

    for sdata in data:
        average = sum(sdata['scores'])/float(len(sdata['scores']))
        sdata['average'] = average

        if average > merit_threshold:
            sdata['assessment'] = 'passed with merit'
        elif average > pass_threshold:
            sdata['assessment'] = 'passed'
        else:
            sdata['assessment'] = 'failed'

        # D

        print("%s's (id: %d) final assessment is:  %s"
              % (sdata['name'], sdata['id'], sdata['assessment'].upper()))

# E

if __name__ == '__main__':
    process_student_data(student_data)
