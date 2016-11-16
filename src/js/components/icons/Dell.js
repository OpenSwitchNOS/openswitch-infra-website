// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
//var uuid = require('node-uuid');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var CLASS_ROOT = "dell-icon";

var Dell = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function() {
    return { a11yTitle: 'Cavium' };
  },

  render: function() {
    var classes = [CLASS_ROOT];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    var svgString = `<svg version="1.1" width="2369pt" height="422pt" viewBox="0 0 2369 422"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                     <path fill="#fefefe" d=" M 0.00 0.00 L 2369.00 0.00 L 2369.00 422.00 L 0.00 422.00 L 0.00 393.72 C 43.34 393.72 86.68 393.72 130.02 393.72 C 140.02 393.70 150.04 393.83 160.04 393.46 C 192.20 391.43 223.77 380.64 250.40 362.49 C 286.70 337.99 313.78 300.11 324.74 257.66 C 329.09 260.40 332.94 263.82 337.03 266.91 C 401.70 317.53 466.56 367.91 531.11 418.68 C 600.07 365.20 668.62 311.18 737.53 257.64 C 737.64 302.98 737.57 348.32 737.57 393.67 C 816.21 393.78 894.86 393.72 973.51 393.70 C 973.49 369.57 973.49 345.44 973.51 321.31 C 923.28 321.25 873.06 321.30 822.84 321.29 C 820.79 321.81 820.60 319.39 820.73 318.04 C 820.78 221.55 820.73 125.06 820.75 28.57 C 793.03 28.56 765.31 28.54 737.59 28.58 C 737.53 74.09 737.67 119.61 737.52 165.12 C 671.54 216.54 605.68 268.11 539.74 319.58 C 525.59 308.63 511.54 297.55 497.42 286.57 C 496.45 286.10 495.83 284.85 496.99 284.19 C 562.54 232.94 628.19 181.82 693.65 130.46 C 673.81 115.13 654.26 99.42 634.27 84.28 C 568.61 136.07 502.40 187.18 436.71 238.94 C 422.48 2.31 408.72 217.06 394.60 206.28 C 393.49 205.69 392.53 203.96 394.10 203.30 C 459.55 152.20 524.95 101.04 590.41 49.97 C 570.97 34.40 551.12 19.33 531.64 3.80 C 528.75 5.43 526.19 7.54 523.63 9.63 C 457.33 61.35 391.15 113.23 324.79 164.88 C 316.67 133.66 300.07 104.63 277.11 81.94 C 243.26 47.67 195.20 27.81 147.00 28.56 C 98.00 28.56 49.00 28.56 0.00 28.56 L 0.00 0.00 Z" />
                      <path fill="#027db8" d=" M 523.63 9.63 C 526.19 7.54 528.75 5.43 531.64 3.80 C 551.12 19.33 570.97 34.40 590.41 49.97 C 524.95 101.04 459.55 152.20 394.10 203.30 C 392.53 203.96 393.49 205.69 394.60 206.28 C 408.72 217.06 422.48 228.31 436.71 238.94 C 502.40 187.18 568.61 136.07 634.27 84.28 C 654.26 99.42 673.81 115.13 693.65 130.46 C 628.19 181.82 562.54 232.94 496.99 284.19 C 495.83 284.85 496.45 286.10 497.42 286.57 C 511.54 297.55 525.59 308.63 539.74 319.58 C 605.68 268.11 671.54 216.54 737.52 165.12 C 737.67 119.61 737.53 74.09 737.59 28.58 C 765.31 28.54 793.03 28.56 820.75 28.57 C 820.73 125.06 820.78 221.55 820.73 318.04 C 820.60 319.39 820.79 321.81 822.84 321.29 C 873.06 321.30 923.28 321.25 973.51 321.31 C 973.49 345.44 973.49 369.57 973.51 393.70 C 894.86 393.72 816.21 393.78 737.57 393.67 C 737.57 348.32 737.64 302.98 737.53 257.64 C 668.62 311.18 600.07 365.20 531.11 418.68 C 466.56 367.91 401.70 317.53 337.03 266.91 C 332.94 263.82 329.09 260.40 324.74 257.66 C 313.78 300.11 286.70 337.99 250.40 362.49 C 223.77 380.64 192.20 391.43 160.04 393.46 C 150.04 393.83 140.02 393.70 130.02 393.72 C 86.68 393.72 43.34 393.72 0.00 393.72 L 0.00 28.56 C 49.00 28.56 98.00 28.56 147.00 28.56 C 195.20 27.81 243.26 47.67 277.11 81.94 C 300.07 104.63 316.67 133.66 324.79 164.88 C 391.15 113.23 457.33 61.35 523.63 9.63 Z" />
                      <path fill="#848686" d=" M 2175.93 29.27 C 2198.06 23.31 2221.31 21.94 2244.07 24.38 C 2273.00 27.42 2302.02 37.36 2324.05 56.88 C 2344.99 74.88 2357.92 100.95 2362.50 127.95 C 2362.69 129.63 2362.87 131.33 2362.81 133.04 C 2361.69 135.14 2359.58 136.49 2358.01 138.21 C 2350.98 138.27 2343.96 138.21 2336.94 138.24 C 2334.61 135.77 2331.26 133.69 2330.97 129.99 C 2325.88 105.15 2312.12 81.44 2290.54 67.50 C 2274.12 56.61 2254.47 51.38 2234.95 50.16 C 2218.87 48.66 2202.59 50.14 2186.90 53.87 C 2169.19 58.34 2152.45 66.72 2138.44 78.46 C 2122.30 91.90 2110.04 109.68 2101.93 128.98 C 2094.73 145.46 2090.82 163.17 2088.55 180.95 C 2085.33 209.10 2086.40 237.85 2092.83 265.49 C 2100.03 296.33 2115.77 326.12 2141.00 345.89 C 2156.50 358.23 2175.13 366.48 2194.58 370.11 C 2213.52 373.63 2233.12 373.49 2252.05 369.94 C 2268.97 366.81 2285.29 359.60 2298.37 348.31 C 2316.34 332.70 2326.71 309.98 2331.08 286.91 C 2331.29 283.18 2334.87 281.25 2337.09 278.69 C 2344.01 278.59 2350.93 278.56 2357.86 278.71 C 2359.79 280.62 2361.73 282.55 2363.47 284.68 C 2361.00 299.02 2357.61 313.32 2351.47 326.59 C 2343.84 343.37 2332.36 358.44 2317.85 369.84 C 2291.44 390.68 2257.13 398.95 2223.98 398.99 C 2187.32 399.59 2150.09 388.60 2121.01 365.95 C 2095.22 346.20 2076.65 317.88 2066.68 287.12 C 2059.12 264.91 2055.86 241.41 2055.36 218.02 C 2054.89 194.75 2056.71 171.28 2062.62 148.71 C 2068.21 127.15 2077.21 106.33 2090.30 88.23 C 2110.81 59.37 2141.71 38.27 2175.93 29.27 Z" />
                      <path fill="#027db8" d=" M 1001.44 393.72 C 1001.45 272.00 1001.42 150.28 1001.45 28.56 C 1029.14 28.56 1056.82 28.57 1084.51 28.55 C 1084.60 126.13 1084.41 223.71 1084.60 321.29 C 1135.53 321.34 1186.47 321.15 1237.39 321.38 C 1237.34 345.46 1237.33 369.54 1237.40 393.62 C 1158.75 393.85 1080.09 393.66 1001.44 393.72 Z" />
                      <path fill="#848686" d=" M 1319.60 33.84 C 1321.33 32.06 1323.08 30.29 1324.85 28.54 C 1399.23 28.55 1473.62 28.54 1548.01 28.54 C 1550.97 28.55 1552.45 31.76 1554.57 33.41 C 1554.65 38.84 1554.63 44.28 1554.59 49.72 C 1552.93 51.37 1551.28 53.02 1549.64 54.68 C 1485.39 54.73 1421.13 54.74 1356.87 54.68 C 1354.84 56.90 1351.01 58.52 1351.36 62.02 C 1351.39 104.05 1351.37 146.08 1351.37 188.11 C 1350.97 191.57 1354.76 193.18 1356.74 195.39 C 1413.48 195.23 1470.22 195.37 1526.96 195.32 C 1530.97 195.40 1534.99 195.12 1539.00 195.44 C 1541.07 196.83 1542.85 198.73 1544.29 200.77 C 1544.49 205.94 1544.21 211.11 1544.39 216.28 C 1542.14 218.22 1540.54 221.99 1537.10 221.61 C 1477.01 221.59 1416.92 221.63 1356.83 221.59 C 1354.83 223.85 1351.07 225.50 1351.36 228.97 C 1351.37 272.66 1351.39 316.35 1351.35 360.03 C 1350.88 363.56 1354.75 365.17 1356.69 367.49 C 1420.99 367.43 1485.29 367.43 1549.60 367.49 C 1551.21 369.17 1552.87 370.82 1554.57 372.44 C 1554.56 377.83 1554.80 383.24 1554.50 388.63 C 1553.17 390.56 1551.31 392.05 1549.69 393.71 C 1475.45 393.82 1401.20 393.71 1326.95 393.77 C 1323.51 394.01 1321.85 390.23 1319.56 388.30 C 1319.66 270.15 1319.58 152.00 1319.60 33.84 Z" />
                      <path fill="#848686" d=" M 1622.48 33.39 C 1624.21 31.74 1625.95 30.10 1627.73 28.49 C 1639.88 28.67 1652.05 28.41 1664.21 28.60 C 1668.33 31.20 1670.77 35.53 1672.27 40.05 C 1716.58 143.95 1760.80 247.88 1805.17 351.75 C 1806.84 351.71 1808.55 351.67 1810.26 351.62 C 1854.95 246.26 1900.04 141.07 1944.81 35.74 C 1946.00 32.77 1948.52 30.70 1950.76 28.52 C 1963.16 28.60 1975.56 28.47 1987.96 28.59 C 1989.50 30.21 1991.10 31.79 1992.74 33.35 C 1992.92 151.84 1992.84 270.33 1992.78 388.83 C 1991.12 390.44 1989.68 392.32 1987.75 393.61 C 1980.64 393.94 1973.50 393.73 1966.39 393.67 C 1964.73 391.95 1963.06 390.25 1961.37 388.59 C 1961.29 287.88 1961.31 187.17 1961.36 86.46 C 1959.67 86.39 1957.98 86.34 1956.33 86.28 C 1914.60 183.20 1872.78 280.08 1831.03 377.00 C 1828.27 382.90 1826.61 390.02 1820.65 393.62 C 1811.90 393.94 1803.12 393.71 1794.37 393.70 C 1792.28 391.37 1789.59 389.44 1788.28 386.53 C 1745.33 286.48 1701.99 186.58 1659.11 86.50 C 1657.41 86.40 1655.70 86.32 1654.04 86.22 C 1653.90 183.82 1654.02 281.42 1653.98 379.02 C 1653.85 382.23 1654.32 385.51 1653.68 388.68 C 1651.58 390.90 1649.53 394.38 1646.00 393.77 C 1639.76 393.72 1633.52 393.84 1627.29 393.66 C 1625.69 391.50 1622.34 390.04 1622.45 387.06 C 1622.48 269.17 1622.41 151.28 1622.48 33.39 Z" />
                      <path fill="#fefefe" d=" M 82.98 101.34 C 106.33 101.43 129.67 101.30 153.02 101.40 C 175.61 102.55 197.31 112.75 213.46 128.44 C 231.93 146.25 243.45 170.73 246.58 196.11 C 249.48 219.47 245.55 243.74 234.83 264.73 C 222.48 289.47 200.24 309.60 173.48 317.37 C 164.59 320.20 155.26 320.82 146.01 321.30 C 125.10 321.32 104.19 321.18 83.29 321.37 C 83.07 319.58 82.85 317.79 82.88 315.99 C 82.99 244.44 82.79 172.89 82.98 101.34 Z" />
    </svg>`;

    return (
        <div dangerouslySetInnerHTML={{ __html: svgString }} />
    );
  }

});

module.exports = Dell;
