function transform(line) {
    var values = line.split(',');

    var obj = new Object();
    obj.ticker = values[0];
    obj.date = new Date(values[1]);
    obj.open = parseFloat(values[2]);
    obj.high = parseFloat(values[3]);
    obj.low = parseFloat(values[4]);
    obj.close = parseFloat(values[5]);
    var jsonString = JSON.stringify(obj);

    return jsonString;
}
