'use strict';

let students = {
    js: [
        {
            name: 'John',
            progress: 100,
        },
        {
            name: 'Ivan',
            progress: 60,
        },
    ],

    html: {
        basic: [
            {
                name: 'Peter',
                progress: 20,
            },
            {
                name: 'Ann',
                progress: 18,
            },
        ],

        pro: [
            {
                name: 'Sam',
                progress: 10,
            },
        ],
    },
};

function getTotalProgressByIteration(data) {
    let total = 0,
        students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            total += course.reduce((sum, current) => sum + current.progress, 0);

            // for (let index = 0; index < course.length; index++) {
            //     total += course[index].progress;
            // }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                total += subCourse.reduce((sum, current) => sum + current.progress, 0);

                // for (let index = 0; index < subCourse.length; index++) {
                //     total += subCourse[index].progress;
                // }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        total += data.reduce((sum, current) => sum + current.progress, 0);

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            let subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);
