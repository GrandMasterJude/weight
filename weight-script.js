google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function average() {
    let average = document.getElementById("average");
    let result = (234.4 + 235.6 + 235.6 + 233.8 + 234.0) / 5;
    console.log('average :', average);
    console.log('result :', result);
    average.innerHTML = Math.round(result * 100) / 100;
}

let dataWeight;
let dataBMI;
let dataPercent;

function drawChart() {
    let dataWeight = google.visualization.arrayToDataTable([
        ['Date', 'Weight'],
        ['7 Sep 2024', 254],
        ['8 Sep 2024', 245.8],
        ['9 Sep 2024', 244.8],
        ['10 Sep 2024', 244.8],
        ['11 Sep 2024', 243.4],
        ['12 Sep 2024', 243.4],
        ['13 Sep 2024', 243.4],
        ['14 Sep 2024', 244.4],
        ['15 Sep 2024', 246.6],
        ['16 Sep 2024', 246.6],
        ['17 Sep 2024', 244.2],
        ['18 Sep 2024', 244.4],
        ['19 Sep 2024', 244.8],
        ['20 Sep 2024', 247.8],
        ['21 Sep 2024', 245.2],
        ['22 Sep 2024', 244.0],
        ['23 Sep 2024', 243.0],
        ['24 Sep 2024', 243.4],
        ['25 Sep 2024', 243.8],
        ['26 Sep 2024', 243.8],
        ['27 Sep 2024', 244.6],
        ['28 Sep 2024', 244.6],
        ['29 Sep 2024', 244.2],
        ['30 Sep 2024', 243.6],
        ['1 Oct 2024', 243.6],
        ['2 Oct 2024', 244.0],
        ['3 Oct 2024', 242.6],
        ['4 Oct 2024', 243.0],
        ['5 Oct 2024', 241.4],
        ['6 Oct 2024', 244.2],
        ['7 Oct 2024', 242.4],
        ['8 Oct 2024', 241.2],
        ['9 Oct 2024', 241.4],
        ['10 Oct 2024', 241.0],
        ['11 Oct 2024', 241.8],
        ['12 Oct 2024', 241.4],
        ['13 Oct 2024', 241.4],
        ['14 Oct 2024', 242.2],
        ['15 Oct 2024', 241.4],
        ['16 Oct 2024', 242.0],
        ['17 Oct 2024', 241.8],
        ['18 Oct 2024', 0],
        ['19 Oct 2024', 0],
        ['20 Oct 2024', 0],
        ['21 Oct 2024', 0],
        ['22 Oct 2024', 0],
        ['23 Oct 2024', 242.6],
        ['24 Oct 2024', 243.4],
        ['25 Oct 2024', 243.8],
        ['26 Oct 2024', 241.4],
        ['27 Oct 2024', 240.8],
        ['28 Oct 2024', 242.4],
        ['29 Oct 2024', 241.6],
        ['30 Oct 2024', 241.8],
        ['31 Oct 2024', 242.4],
        ['1 Nov 2024', 242.4],
        ['2 Nov 2024', 241.0],
        ['3 Nov 2024', 241.8],
        ['4 Nov 2024', 241.4],
        ['5 Nov 2024', 242.2],
        ['6 Nov 2024', 241.4],
        ['7 Nov 2024', 241.8],
        ['8 Nov 2024', 242.6],
        ['9 Nov 2024', 241.4],
        ['10 Nov 2024', 241.8],
        ['11 Nov 2024', 242.2],
        ['12 Nov 2024', 243.0],
        ['13 Nov 2024', 242.6],
        ['14 Nov 2024', 243.2],
        ['15 Nov 2024', 242.4],
        ['16 Nov 2024', 241.4],
        ['17 Nov 2024', 241.4],
        ['18 Nov 2024', 241.4],
        ['19 Nov 2024', 239.6],
        ['20 Nov 2024', 240.0],
        ['21 Nov 2024', 240.0],
        ['22 Nov 2024', 240.2],
        ['23 Nov 2024', 239.4],
        ['24 Nov 2024', 238.8],
        ['25 Nov 2024', 237.6],
        ['26 Nov 2024', 237.0],
        ['27 Nov 2024', 239.0],
        ['28 Nov 2024', 238.0],
        ['29 Nov 2024', 239.8],
        ['30 Nov 2024', 238.8],
        ['1 Dec 2024', 237.8],
        ['2 Dec 2024', 239.4],
        ['3 Dec 2024', 237.4],
        ['4 Dec 2024', 238.0],
        ['5 Dec 2024', 240.4],
        ['6 Dec 2024', 238.2],
        ['7 Dec 2024', 237.6],
        ['8 Dec 2024', 235.4],
        ['9 Dec 2024', 236.2],
        ['10 Dec 2024', 234.4],
        ['11 Dec 2024', 235.8],
        ['12 Dec 2024', 236.8],
        ['13 Dec 2024', 237.0],
        ['14 Dec 2024', 237.0],
        ['15 Dec 2024', 236.6],
        ['16 Dec 2024', 237.6],
        ['17 Dec 2024', 235.4],
        ['18 Dec 2024', 234.6],
        ['19 Dec 2024', 235.6],
        ['20 Dec 2024', 234.6],
        ['21 Dec 2024', 234.4],
        ['22 Dec 2024', 235.0],
        ['23 Dec 2024', 235.8],
        ['24 Dec 2024', 233.6],
        ['25 Dec 2024', 235.2],
        ['26 Dec 2024', 235.8],
        ['27 Dec 2024', 235.4],
        ['28 Dec 2024', 236.0],
        ['29 Dec 2024', 237.2],
        ['30 Dec 2024', 234.6],
        ['31 Dec 2024', 234.6],
        ['1 Jan 2025', 237.4],
        ['2 Jan 2025', 235.6],
        ['3 Jan 2025', 235.8],
        ['4 Jan 2025', 235.4],
        ['5 Jan 2025', 236.2],
        ['6 Jan 2025', 235.2],
        ['7 Jan 2025', 233.6],
        ['8 Jan 2025', 233.0],
        ['9 Jan 2025', 235.0],
        ['10 Jan 2025', 235.6],
        ['11 Jan 2025', 235.0],
        ['12 Jan 2025', 235.6],
        ['13 Jan 2025', 235.2],
        ['14 Jan 2025', 234.8],
        ['15 Jan 2025', 236.8],
        ['16 Jan 2025', 234.6],
        ['17 Jan 2025', 237.0],
        ['18 Jan 2025', 234.0],
        ['19 Jan 2025', 0],
        ['20 Jan 2025', 0],
        ['21 Jan 2025', 0],
        ['22 Jan 2025', 234.0],
        ['23 Jan 2025', 233.8],
        ['24 Jan 2025', 235.2],
        ['25 Jan 2025', 237.0],
        ['26 Jan 2025', 0],
        ['27 Jan 2025', 235.2],
        ['28 Jan 2025', 233.6],
        ['29 Jan 2025', 235.6],
        ['30 Jan 2025', 234.4],
        ['31 Jan 2025', 235.0],
        ['1 Feb 2025', 234.4],
        ['2 Feb 2025', 235.6],
        ['3 Feb 2025', 235.6],
        ['4 Feb 2025', 233.8],
        ['5 Feb 2025', 234.0],
        ['6 Feb 2025', 0.0],
        ['7 Feb 2025', 0.0],
        ['8 Feb 2025', 0.0],
        ['9 Feb 2025', 0.0],
        ['10 Feb 2025', 0.0],
        ['11 Feb 2025', 0.0],
        ['12 Feb 2025', 0.0],
        ['13 Feb 2025', 0.0],
        ['14 Feb 2025', 0.0],
        ['15 Feb 2025', 0.0],
        ['16 Feb 2025', 0.0],
        ['17 Feb 2025', 0.0],
        ['18 Feb 2025', 0.0],
        ['19 Feb 2025', 0.0],
        ['20 Feb 2025', 0.0],
        ['21 Feb 2025', 0.0],
        ['22 Feb 2025', 0.0],
        ['23 Feb 2025', 0.0],
        ['24 Feb 2025', 0.0],
        ['25 Feb 2025', 0.0],
        ['26 Feb 2025', 0.0],
        ['27 Feb 2025', 0.0],
        ['28 Feb 2025', 0.0],
        ['1 Mar 2025', 0.0],
        ['2 Mar 2025', 0.0],
        ['3 Mar 2025', 0.0],
        ['4 Mar 2025', 0.0],
        ['5 Mar 2025', 0.0],
        ['6 Mar 2025', 0.0],
        ['7 Mar 2025', 0.0],
        ['8 Mar 2025', 0.0],
        ['9 Mar 2025', 0.0],
        ['10 Mar 2025', 0.0],
        ['11 Mar 2025', 0.0],
        ['12 Mar 2025', 0.0],
        ['13 Mar 2025', 0.0],
        ['14 Mar 2025', 0.0],
        ['15 Mar 2025', 0.0],
        ['16 Mar 2025', 0.0],
        ['17 Mar 2025', 0.0],
        ['18 Mar 2025', 0.0],
        ['19 Mar 2025', 0.0],
        ['20 Mar 2025', 0.0],
        ['21 Mar 2025', 0.0],
        ['22 Mar 2025', 0.0],
        ['23 Mar 2025', 0.0],
        ['24 Mar 2025', 0.0],
        ['25 Mar 2025', 0.0],
        ['26 Mar 2025', 0.0],
        ['27 Mar 2025', 0.0],
        ['28 Mar 2025', 0.0],
        ['29 Mar 2025', 0.0],
        ['30 Mar 2025', 0.0],
        ['31 Mar 2025', 0.0],
        ['1 Apr 2025', 0.0],
        ['2 Apr 2025', 0.0],
        ['3 Apr 2025', 0.0],
        ['4 Apr 2025', 0.0],
        ['5 Apr 2025', 0.0],
        ['6 Apr 2025', 0.0],
        ['7 Apr 2025', 0.0],
        ['8 Apr 2025', 0.0],
        ['9 Apr 2025', 0.0],
        ['10 Apr 2025', 0.0],
        ['11 Apr 2025', 0.0],
        ['12 Apr 2025', 0.0],
        ['13 Apr 2025', 0.0],
        ['14 Apr 2025', 0.0],
        ['15 Apr 2025', 0.0],
        ['16 Apr 2025', 0.0],
        ['17 Apr 2025', 0.0],
        ['18 Apr 2025', 0.0],
        ['19 Apr 2025', 0.0],
        ['20 Apr 2025', 0.0],
        ['21 Apr 2025', 0.0],
        ['22 Apr 2025', 0.0],
        ['23 Apr 2025', 0.0],
        ['24 Apr 2025', 0.0],
        ['25 Apr 2025', 0.0],
        ['26 Apr 2025', 0.0],
        ['27 Apr 2025', 0.0],
        ['28 Apr 2025', 0.0],
        ['29 Apr 2025', 0.0],
        ['30 Apr 2025', 0.0],
    ]);

    let dataBMI = google.visualization.arrayToDataTable([
        ['Date', 'B M I'],
        ['7 Sep 2024', 29.6],
        ['8 Sep 2024', 28.7],
        ['9 Sep 2024', 26.6],
        ['10 Sep 2024', 28.5],
        ['11 Sep 2024', 28.4],
        ['12 Sep 2024', 28.4],
        ['13 Sep 2024', 28.4],
        ['14 Sep 2024', 28.5],
        ['15 Sep 2024', 28.8],
        ['16 Sep 2024', 28.8],
        ['17 Sep 2024', 28.5],
        ['18 Sep 2024', 28.5],
        ['19 Sep 2024', 28.6],
        ['20 Sep 2024', 28.9],
        ['21 Sep 2024', 28.6],
        ['22 Sep 2024', 28.1],
        ['23 Sep 2024', 28.3],
        ['24 Sep 2024', 28.4],
        ['25 Sep 2024', 28.4],
        ['26 Sep 2024', 28.4],
        ['27 Sep 2024', 28.5],
        ['28 Sep 2024', 28.5],
        ['29 Sep 2024', 28.5],
        ['30 Sep 2024', 28.4],
        ['1 Oct 2024', 28.4],
        ['2 Oct 2024', 28.4],
        ['3 Oct 2024', 28.3],
        ['4 Oct 2024', 28.3],
        ['5 Oct 2024', 28.1],
        ['6 Oct 2024', 28.5],
        ['7 Oct 2024', 28.3],
        ['8 Oct 2024', 28.1],
        ['9 Oct 2024', 28.1],
        ['10 Oct 2024', 28.1],
        ['11 Oct 2024', 28.2],
        ['12 Oct 2024', 28.1],
        ['13 Oct 2024', 28.1],
        ['14 Oct 2024', 28.2],
        ['15 Oct 2024', 28.1],
        ['16 Oct 2024', 28.2],
        ['17 Oct 2024', 28.2],
        ['18 Oct 2024', 0],
        ['19 Oct 2024', 0],
        ['20 Oct 2024', 0],
        ['21 Oct 2024', 0],
        ['22 Oct 2024', 0],
        ['23 Oct 2024', 28.3],
        ['24 Oct 2024', 28.4],
        ['25 Oct 2024', 28.1],
        ['26 Oct 2024', 28.2],
        ['27 Oct 2024', 28.1],
        ['28 Oct 2024', 28.3],
        ['29 Oct 2024', 28.2],
        ['30 Oct 2024', 28.2],
        ['31 Oct 2024', 28.3],
        ['1 Nov 2024', 28.3],
        ['2 Nov 2024', 28.1],
        ['3 Nov 2024', 28.2],
        ['4 Nov 2024', 28.2],
        ['5 Nov 2024', 28.2],
        ['6 Nov 2024', 28.1],
        ['7 Nov 2024', 28.2],
        ['8 Nov 2024', 28.3],
        ['9 Nov 2024', 28.1],
        ['10 Nov 2024', 28.2],
        ['11 Nov 2024', 28.3],
        ['12 Nov 2024', 28.3],
        ['13 Nov 2024', 28.3],
        ['14 Nov 2024', 28.3],
        ['15 Nov 2024', 28.3],
        ['16 Nov 2024', 28.1],
        ['17 Nov 2024', 28.1],
        ['18 Nov 2024', 28.1],
        ['19 Nov 2024', 27.9],
        ['20 Nov 2024', 28.0],
        ['21 Nov 2024', 28.0],
        ['22 Nov 2024', 28.0],
        ['23 Nov 2024', 27.9],
        ['24 Nov 2024', 27.8],
        ['25 Nov 2024', 27.7],
        ['26 Nov 2024', 27.6],
        ['27 Nov 2024', 27.9],
        ['28 Nov 2024', 27.8],
        ['29 Nov 2024', 28.0],
        ['30 Nov 2024', 27.9],
        ['1 Dec 2024', 27.7],
        ['2 Dec 2024', 27.9],
        ['3 Dec 2024', 27.7],
        ['4 Dec 2024', 27.8],
        ['5 Dec 2024', 28],
        ['6 Dec 2024', 27.8],
        ['7 Dec 2024', 27.7],
        ['8 Dec 2024', 27.4],
        ['9 Dec 2024', 27.5],
        ['10 Dec 2024', 27.3],
        ['11 Dec 2024', 27.5],
        ['12 Dec 2024', 27.6],
        ['13 Dec 2024', 27.6],
        ['14 Dec 2024', 27.6],
        ['15 Dec 2024', 27.6],
        ['16 Dec 2024', 27.7],
        ['17 Dec 2024', 27.4],
        ['18 Dec 2024', 27.3],
        ['19 Dec 2024', 27.5],
        ['20 Dec 2024', 27.3],
        ['21 Dec 2024', 27.3],
        ['22 Dec 2024', 27.4],
        ['23 Dec 2024', 27.5],
        ['24 Dec 2024', 27.2],
        ['25 Dec 2024', 27.4],
        ['26 Dec 2024', 27.5],
        ['27 Dec 2024', 27.4],
        ['28 Dec 2024', 27.5],
        ['29 Dec 2024', 27.6],
        ['30 Dec 2024', 27.3],
        ['31 Dec 2024', 27.3],
        ['1 Jan 2025', 27.7],
        ['2 Jan 2025', 27.5],
        ['3 Jan 2025', 27.5],
        ['4 Jan 2025', 27.4],
        ['5 Jan 2025', 27.5],
        ['6 Jan 2025', 27.4],
        ['7 Jan 2025', 27.2],
        ['8 Jan 2025', 27.2],
        ['9 Jan 2025', 27.4],
        ['10 Jan 2025', 27.5],
        ['11 Jan 2025', 27.4],
        ['12 Jan 2025', 27.5],
        ['13 Jan 2025', 27.4],
        ['14 Jan 2025', 27.4],
        ['15 Jan 2025', 27.6],
        ['16 Jan 2025', 27.3],
        ['17 Jan 2025', 27.6],
        ['18 Jan 2025', 27.3],
        ['19 Jan 2025', 0],
        ['20 Jan 2025', 0],
        ['21 Jan 2025', 0],
        ['22 Jan 2025', 27.3],
        ['23 Jan 2025', 27.3],
        ['24 Jan 2025', 27.4],
        ['25 Jan 2025', 27.6],
        ['26 Jan 2025', 0],
        ['27 Jan 2025', 27.4],
        ['28 Jan 2025', 27.2],
        ['29 Jan 2025', 27.5],
        ['30 Jan 2025', 27.3],
        ['31 Jan 2025', 27.4],
        ['1 Feb 2025', 27.3],
        ['2 Feb 2025', 27.5],
        ['3 Feb 2025', 27.5],
        ['4 Feb 2025', 27.3],
        ['5 Feb 2025', 27.3],
        ['6 Feb 2025', 0.0],
        ['7 Feb 2025', 0.0],
        ['8 Feb 2025', 0.0],
        ['9 Feb 2025', 0.0],
        ['10 Feb 2025', 0.0],
        ['11 Feb 2025', 0.0],
        ['12 Feb 2025', 0.0],
        ['13 Feb 2025', 0.0],
        ['14 Feb 2025', 0.0],
        ['15 Feb 2025', 0.0],
        ['16 Feb 2025', 0.0],
        ['17 Feb 2025', 0.0],
        ['18 Feb 2025', 0.0],
        ['19 Feb 2025', 0.0],
        ['20 Feb 2025', 0.0],
        ['21 Feb 2025', 0.0],
        ['22 Feb 2025', 0.0],
        ['23 Feb 2025', 0.0],
        ['24 Feb 2025', 0.0],
        ['25 Feb 2025', 0.0],
        ['26 Feb 2025', 0.0],
        ['27 Feb 2025', 0.0],
        ['28 Feb 2025', 0.0],
        ['1 Mar 2025', 0.0],
        ['2 Mar 2025', 0.0],
        ['3 Mar 2025', 0.0],
        ['4 Mar 2025', 0.0],
        ['5 Mar 2025', 0.0],
        ['6 Mar 2025', 0.0],
        ['7 Mar 2025', 0.0],
        ['8 Mar 2025', 0.0],
        ['9 Mar 2025', 0.0],
        ['10 Mar 2025', 0.0],
        ['11 Mar 2025', 0.0],
        ['12 Mar 2025', 0.0],
        ['13 Mar 2025', 0.0],
        ['14 Mar 2025', 0.0],
        ['15 Mar 2025', 0.0],
        ['16 Mar 2025', 0.0],
        ['17 Mar 2025', 0.0],
        ['18 Mar 2025', 0.0],
        ['19 Mar 2025', 0.0],
        ['20 Mar 2025', 0.0],
        ['21 Mar 2025', 0.0],
        ['22 Mar 2025', 0.0],
        ['23 Mar 2025', 0.0],
        ['24 Mar 2025', 0.0],
        ['25 Mar 2025', 0.0],
        ['26 Mar 2025', 0.0],
        ['27 Mar 2025', 0.0],
        ['28 Mar 2025', 0.0],
        ['29 Mar 2025', 0.0],
        ['30 Mar 2025', 0.0],
        ['31 Mar 2025', 0.0],
        ['1 Apr 2025', 0.0],
        ['2 Apr 2025', 0.0],
        ['3 Apr 2025', 0.0],
        ['4 Apr 2025', 0.0],
        ['5 Apr 2025', 0.0],
        ['6 Apr 2025', 0.0],
        ['7 Apr 2025', 0.0],
        ['8 Apr 2025', 0.0],
        ['9 Apr 2025', 0.0],
        ['10 Apr 2025', 0.0],
        ['11 Apr 2025', 0.0],
        ['12 Apr 2025', 0.0],
        ['13 Apr 2025', 0.0],
        ['14 Apr 2025', 0.0],
        ['15 Apr 2025', 0.0],
        ['16 Apr 2025', 0.0],
        ['17 Apr 2025', 0.0],
        ['18 Apr 2025', 0.0],
        ['19 Apr 2025', 0.0],
        ['20 Apr 2025', 0.0],
        ['21 Apr 2025', 0.0],
        ['22 Apr 2025', 0.0],
        ['23 Apr 2025', 0.0],
        ['24 Apr 2025', 0.0],
        ['25 Apr 2025', 0.0],
        ['26 Apr 2025', 0.0],
        ['27 Apr 2025', 0.0],
        ['28 Apr 2025', 0.0],
        ['29 Apr 2025', 0.0],
        ['30 Apr 2025', 0.0],
    ]);

    let dataPercent = google.visualization.arrayToDataTable([
        ['Date', 'Fat %', 'Water %', 'Muscle %'],
        ['7 Sep 2024', 33.3, 25.0, 30.1],
        ['8 Sep 2024', 28.9, 34.9, 26.1],
        ['9 Sep 2024', 26.8, 35.0, 26.2],
        ['10 Sep 2024', 28.7, 35.1, 26.3],
        ['11 Sep 2024', 28.6, 35.3, 26.4],
        ['12 Sep 2024', 28.6, 35.3, 26.4],
        ['13 Sep 2024', 28.6, 35.3, 26.4],
        ['14 Sep 2024', 28.7, 35.1, 26.3],
        ['15 Sep 2024', 29.1, 34.7, 26.0],
        ['16 Sep 2024', 29.1, 34.7, 26.0],
        ['17 Sep 2024', 28.7, 35.1, 26.3],
        ['18 Sep 2024', 28.7, 35.1, 26.3],
        ['19 Sep 2024', 28.8, 35.0, 26.2],
        ['20 Sep 2024', 29.2, 34.5, 25.8],
        ['21 Sep 2024', 28.8, 34.9, 26.1],
        ['22 Sep 2024', 28.6, 35.2, 26.3],
        ['23 Sep 2024', 28.5, 35.4, 26.5],
        ['24 Sep 2024', 28.6, 35.3, 26.4],
        ['25 Sep 2024', 28.6, 35.2, 26.2],
        ['26 Sep 2024', 28.6, 35.2, 26.3],
        ['27 Sep 2024', 28.7, 35.0, 26.2],
        ['28 Sep 2024', 28.7, 35.0, 26.2],
        ['29 Sep 2024', 28.7, 35.1, 26.3],
        ['30 Sep 2024', 28.6, 35.2, 26.3],
        ['1 Oct 2024', 28.6, 35.2, 26.3],
        ['2 Oct 2024', 28.6, 35.2, 26.3],
        ['3 Oct 2024', 28.5, 35.4, 26.5],
        ['4 Oct 2024', 28.5, 35.4, 26.5],
        ['5 Oct 2024', 28.2, 35.7, 26.7],
        ['6 Oct 2024', 28.5, 35.1, 26.3],
        ['7 Oct 2024', 28.4, 35.5, 26.6],
        ['8 Oct 2024', 28.2, 35.7, 26.7],
        ['9 Oct 2024', 28.2, 35.7, 26.7],
        ['10 Oct 2024', 28.2, 35.8, 26.8],
        ['11 Oct 2024', 28.3, 35.6, 26.6],
        ['12 Oct 2024', 28.2, 35.7, 26.7],
        ['13 Oct 2024', 28.2, 35.7, 26.7],
        ['14 Oct 2024', 28.3, 35.5, 26.6],
        ['15 Oct 2024', 28.2, 35.7, 26.7],
        ['16 Oct 2024', 28.3, 35.4, 26.6],
        ['17 Oct 2024', 28.3, 35.6, 26.6],
        ['18 Oct 2024', 0.0, 0.0, 0.0],
        ['19 Oct 2024', 0.0, 0.0, 0.0],
        ['20 Oct 2024', 0.0, 0.0, 0.0],
        ['21 Oct 2024', 0.0, 0.0, 0.0],
        ['22 Oct 2024', 0.0, 0.0, 0.0],
        ['23 Oct 2024', 28.5, 35.4, 26.5],
        ['24 Oct 2024', 28.6, 35.3, 26.4],
        ['25 Oct 2024', 28.6, 35.2, 26.3],
        ['26 Oct 2024', 28.2, 35.7, 26.7],
        ['27 Oct 2024', 28.2, 35.8, 26.8],
        ['28 Oct 2024', 28.4, 35.5, 26.5],
        ['29 Oct 2024', 28.3, 35.6, 26.6],
        ['30 Oct 2024', 28.3, 35.6, 26.6],
        ['31 Oct 2024', 28.4, 35.5, 26.6],
        ['1 Nov 2024', 28.4, 35.5, 26.6],
        ['2 Nov 2024', 28.2, 35.8, 26.8],
        ['3 Nov 2024', 28.3, 35.6, 26.6],
        ['4 Nov 2024', 28.3, 35.6, 26.6],
        ['5 Nov 2024', 28.3, 35.5, 26.6],
        ['6 Nov 2024', 28.2, 35.7, 26.7],
        ['7 Nov 2024', 28.3, 35.6, 26.6],
        ['8 Nov 2024', 28.5, 35.4, 26.5],
        ['9 Nov 2024', 28.2, 35.7, 26.7],
        ['10 Nov 2024', 28.3, 35.6, 26.6],
        ['11 Nov 2024', 28.4, 35.5, 26.6],
        ['12 Nov 2024', 28.5, 35.4, 26.5],
        ['13 Nov 2024', 28.5, 35.4, 26.5],
        ['14 Nov 2024', 28.5, 35.3, 26.4],
        ['15 Nov 2024', 28.4, 35.5, 26.6],
        ['16 Nov 2024', 28.2, 35.7, 26.7],
        ['17 Nov 2024', 28.2, 35.7, 26.7],
        ['18 Nov 2024', 28.2, 35.7, 26.7],
        ['19 Nov 2024', 28.0, 36.0, 26.9],
        ['20 Nov 2024', 28.1, 35.9, 26.9],
        ['21 Nov 2024', 28.1, 35.9, 26.9],
        ['22 Nov 2024', 28.1, 35.9, 26.9],
        ['23 Nov 2024', 28.0, 36.1, 27.0],
        ['24 Nov 2024', 27.8, 36.2, 27.1],
        ['25 Nov 2024', 27.7, 36.4, 27.2],
        ['26 Nov 2024', 27.6, 36.5, 27.3],
        ['27 Nov 2024', 27.9, 36.1, 27.0],
        ['28 Nov 2024', 27.8, 36.3, 27.1],
        ['29 Nov 2024', 28.1, 36.0, 26.9],
        ['30 Nov 2024', 27.9, 36.1, 27.0],
        ['1 Dec 2024', 27.7, 36.4, 27.2],
        ['2 Dec 2024', 28.0, 36.1, 27.0],
        ['3 Dec 2024', 27.7, 36.4, 27.2],
        ['4 Dec 2024', 27.8, 36.3, 27.1],
        ['5 Dec 2024', 28.1, 35.8, 26.8],
        ['6 Dec 2024', 27.8, 36.3, 27.1],
        ['7 Dec 2024', 27.7, 36.4, 27.2],
        ['8 Dec 2024', 27.4, 36.8, 27.5],
        ['9 Dec 2024', 27.5, 36.7, 27.4],
        ['10 Dec 2024', 27.2, 37.0, 27.7],
        ['11 Dec 2024', 27.5, 36.7, 27.4],
        ['12 Dec 2024', 27.6, 36.6, 27.4],
        ['13 Dec 2024', 27.6, 36.5, 27.3],
        ['14 Dec 2024', 27.6, 36.5, 27.3],
        ['15 Dec 2024', 27.6, 36.6, 27.4],
        ['16 Dec 2024', 27.7, 36.4, 27.2],
        ['17 Dec 2024', 27.4, 36.8, 27.5],
        ['18 Dec 2024', 27.2, 37.0, 27.7],
        ['19 Dec 2024', 27.5, 36.8, 27.5],
        ['20 Dec 2024', 27.2, 37.0, 27.7],
        ['21 Dec 2024', 27.2, 37.0, 27.7],
        ['22 Dec 2024', 27.3, 36.1, 27.6],
        ['23 Dec 2024', 27.5, 36.7, 27.4],
        ['24 Dec 2024', 27.1, 37.2, 27.8],
        ['25 Dec 2024', 27.3, 36.9, 27.6],
        ['26 Dec 2024', 27.5, 36.7, 27.4],
        ['27 Dec 2024', 27.4, 36.8, 27.5],
        ['28 Dec 2024', 27.5, 36.7, 27.4],
        ['29 Dec 2024', 27.6, 36.5, 27.3],
        ['30 Dec 2024', 27.2, 37.0, 27.7],
        ['31 Dec 2024', 27.2, 37.0, 27.7],
        ['1 Jan 2025', 27.7, 36.4, 26.2],
        ['2 Jan 2025', 27.5, 36.8, 27.5],
        ['3 Jan 2025', 27.5, 36.7, 27.4],
        ['4 Jan 2025', 27.4, 36.8, 27.5],
        ['5 Jan 2025', 27.5, 36.7, 27.4],
        ['6 Jan 2025', 27.3, 36.9, 27.6],
        ['7 Jan 2025', 27.1, 37.2, 27.8],
        ['8 Jan 2025', 27.1, 37.3, 27.9],
        ['9 Jan 2025', 27.3, 36.9, 27.6],
        ['10 Jan 2025', 27.5, 36.8, 27.5],
        ['11 Jan 2025', 27.3, 36.9, 27.6],
        ['12 Jan 2025', 27.5, 36.8, 27.5],
        ['13 Jan 2025', 27.3, 36.9, 27.6],
        ['14 Jan 2025', 27.3, 37.0, 27.7],
        ['15 Jan 2025', 27.6, 36.6, 27.4],
        ['16 Jan 2025', 27.2, 37.0, 27.7],
        ['17 Jan 2025', 27.6, 36.5, 27.3],
        ['18 Jan 2025', 27.2, 37.1, 27.7],
        ['19 Jan 2025', 0.0, 0.0, 0.0],
        ['20 Jan 2025', 0.0, 0.0, 0.0],
        ['21 Jan 2025', 0.0, 0.0, 0.0],
        ['22 Jan 2025', 27.2, 37.1, 27.7],
        ['23 Jan 2025', 27.2, 37.1, 27.7],
        ['24 Jan 2025', 27.3, 36.9, 27.6],
        ['25 Jan 2025', 27.6, 36.5, 27.3],
        ['26 Jan 2025', 0.0, 0.0, 0.0],
        ['27 Jan 2025', 27.3, 36.9, 27.6],
        ['28 Jan 2025', 27.1, 37.2, 27.8],
        ['29 Jan 2025', 27.5, 36.8, 27.5],
        ['30 Jan 2025', 27.2, 37.0, 27.7],
        ['31 Jan 2025', 27.3, 36.9, 27.6],
        ['1 Feb 2025', 27.2, 37.0, 27.7],
        ['2 Feb 2025', 27.5, 36.8, 27.5],
        ['3 Feb 2025', 27.5, 36.8, 27.5],
        ['4 Feb 2025', 27.2, 37.1, 27.7],
        ['5 Feb 2025', 27.2, 37.1, 27.7],
        ['6 Feb 2025', 0.0, 0.0, 0.0],
        ['7 Feb 2025', 0.0, 0.0, 0.0],
        ['8 Feb 2025', 0.0, 0.0, 0.0],
        ['9 Feb 2025', 0.0, 0.0, 0.0],
        ['10 Feb 2025', 0.0, 0.0, 0.0],
        ['11 Feb 2025', 0.0, 0.0, 0.0],
        ['12 Feb 2025', 0.0, 0.0, 0.0],
        ['13 Feb 2025', 0.0, 0.0, 0.0],
        ['14 Feb 2025', 0.0, 0.0, 0.0],
        ['15 Feb 2025', 0.0, 0.0, 0.0],
        ['16 Feb 2025', 0.0, 0.0, 0.0],
        ['17 Feb 2025', 0.0, 0.0, 0.0],
        ['18 Feb 2025', 0.0, 0.0, 0.0],
        ['19 Feb 2025', 0.0, 0.0, 0.0],
        ['20 Feb 2025', 0.0, 0.0, 0.0],
        ['21 Feb 2025', 0.0, 0.0, 0.0],
        ['22 Feb 2025', 0.0, 0.0, 0.0],
        ['23 Feb 2025', 0.0, 0.0, 0.0],
        ['24 Feb 2025', 0.0, 0.0, 0.0],
        ['25 Feb 2025', 0.0, 0.0, 0.0],
        ['26 Feb 2025', 0.0, 0.0, 0.0],
        ['27 Feb 2025', 0.0, 0.0, 0.0],
        ['28 Feb 2025', 0.0, 0.0, 0.0],
        ['1 Mar 2025', 0.0, 0.0, 0.0],
        ['2 Mar 2025', 0.0, 0.0, 0.0],
        ['3 Mar 2025', 0.0, 0.0, 0.0],
        ['4 Mar 2025', 0.0, 0.0, 0.0],
        ['5 Mar 2025', 0.0, 0.0, 0.0],
        ['6 Mar 2025', 0.0, 0.0, 0.0],
        ['7 Mar 2025', 0.0, 0.0, 0.0],
        ['8 Mar 2025', 0.0, 0.0, 0.0],
        ['9 Mar 2025', 0.0, 0.0, 0.0],
        ['10 Mar 2025', 0.0, 0.0, 0.0],
        ['11 Mar 2025', 0.0, 0.0, 0.0],
        ['12 Mar 2025', 0.0, 0.0, 0.0],
        ['13 Mar 2025', 0.0, 0.0, 0.0],
        ['14 Mar 2025', 0.0, 0.0, 0.0],
        ['15 Mar 2025', 0.0, 0.0, 0.0],
        ['16 Mar 2025', 0.0, 0.0, 0.0],
        ['17 Mar 2025', 0.0, 0.0, 0.0],
        ['18 Mar 2025', 0.0, 0.0, 0.0],
        ['19 Mar 2025', 0.0, 0.0, 0.0],
        ['20 Mar 2025', 0.0, 0.0, 0.0],
        ['21 Mar 2025', 0.0, 0.0, 0.0],
        ['22 Mar 2025', 0.0, 0.0, 0.0],
        ['23 Mar 2025', 0.0, 0.0, 0.0],
        ['24 Mar 2025', 0.0, 0.0, 0.0],
        ['25 Mar 2025', 0.0, 0.0, 0.0],
        ['26 Mar 2025', 0.0, 0.0, 0.0],
        ['27 Mar 2025', 0.0, 0.0, 0.0],
        ['28 Mar 2025', 0.0, 0.0, 0.0],
        ['29 Mar 2025', 0.0, 0.0, 0.0],
        ['30 Mar 2025', 0.0, 0.0, 0.0],
        ['31 Mar 2025', 0.0, 0.0, 0.0],
        ['1 Apr 2025', 0.0, 0.0, 0.0],
        ['2 Apr 2025', 0.0, 0.0, 0.0],
        ['3 Apr 2025', 0.0, 0.0, 0.0],
        ['4 Apr 2025', 0.0, 0.0, 0.0],
        ['5 Apr 2025', 0.0, 0.0, 0.0],
        ['6 Apr 2025', 0.0, 0.0, 0.0],
        ['7 Apr 2025', 0.0, 0.0, 0.0],
        ['8 Apr 2025', 0.0, 0.0, 0.0],
        ['9 Apr 2025', 0.0, 0.0, 0.0],
        ['10 Apr 2025', 0.0, 0.0, 0.0],
        ['11 Apr 2025', 0.0, 0.0, 0.0],
        ['12 Apr 2025', 0.0, 0.0, 0.0],
        ['13 Apr 2025', 0.0, 0.0, 0.0],
        ['14 Apr 2025', 0.0, 0.0, 0.0],
        ['15 Apr 2025', 0.0, 0.0, 0.0],
        ['16 Apr 2025', 0.0, 0.0, 0.0],
        ['17 Apr 2025', 0.0, 0.0, 0.0],
        ['18 Apr 2025', 0.0, 0.0, 0.0],
        ['19 Apr 2025', 0.0, 0.0, 0.0],
        ['20 Apr 2025', 0.0, 0.0, 0.0],
        ['21 Apr 2025', 0.0, 0.0, 0.0],
        ['22 Apr 2025', 0.0, 0.0, 0.0],
        ['23 Apr 2025', 0.0, 0.0, 0.0],
        ['24 Apr 2025', 0.0, 0.0, 0.0],
        ['25 Apr 2025', 0.0, 0.0, 0.0],
        ['26 Apr 2025', 0.0, 0.0, 0.0],
        ['27 Apr 2025', 0.0, 0.0, 0.0],
        ['28 Apr 2025', 0.0, 0.0, 0.0],
        ['29 Apr 2025', 0.0, 0.0, 0.0],
        ['30 Apr 2025', 0.0, 0.0, 0.0],
        ]);

    var formatter = new google.visualization.NumberFormat({ 
        fractionDigits: 1
    });

    for (var i = 1; i < dataWeight.getNumberOfColumns(); i++) {
        formatter.format(dataWeight, i);
      }

    let options0 = {
        // bars: 'horizontal',
        chart: {
            title: 'Weight',
            legend: { position: 'none' },
        }
    };
    let options1 = {
        // bars: 'horizontal',
        chart: {
            title: 'BMI',
            legend: { position: 'none' },
        }
    };
    let options2 = {
        // bars: 'horizontal',
        isStacked: 'true',
        series: {
            0:{color:'yellow'},
            1:{color:'blue'},
            2:{color:'red'},
          },
        chart: {
            title: 'Body %',
            legend: { position: 'none' },
        }
    };
    let options4 = {
        chart: {
            title: 'Weight',
        }
    };


    let chart0 = new google.charts.Bar(document.getElementById('barchart0'));
    let chart1 = new google.charts.Bar(document.getElementById('barchart1'));
    let chart2 = new google.charts.Bar(document.getElementById('barchart2'));
    let chart4 = new google.charts.Bar(document.getElementById('barchart4'));

    chart0.draw(dataWeight, google.charts.Bar.convertOptions(options0));
    chart1.draw(dataBMI, google.charts.Bar.convertOptions(options1));
    chart2.draw(dataPercent, google.charts.Bar.convertOptions(options2));
    chart4.draw(dataWeight, google.charts.Bar.convertOptions(options4));
};

average();
