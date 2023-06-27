d3.json('https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/sankey_energy.json', function(fig){

var data = {
  type: "sankey",
  domain: {
    x: [0,1],
    y: [0,1]
  },
  orientation: "h",
  valueformat: ".0f",
  valuesuffix: "TWh",
  node: {
    pad: 15,
    thickness: 15,
    line: {
      color: "black",
      width: 0.5
    },
   label: fig.data[0].node.label,
   color: fig.data[0].node.color
      },

  link: {
    source: fig.data[0].link.source,
    target: fig.data[0].link.target,
    value: fig.data[0].link.value,
    label: fig.data[0].link.label
  }
}

var data = [data]

var layout = {
  title: "Energy forecast for 2050<br>Source: Department of Energy & Climate Change, Tom Counsell via <a href='https://bost.ocks.org/mike/sankey/'>Mike Bostock</a>",
  width: 1118,
  height: 772,
  font: {
    size: 10
  }
}



const config = {responsive: true}
Plotly.newPlot('sankey1', data, layout, config)

});


var data2 = {
    type: "sankey",
    domain: {
      x: [0,1],
      y: [0,1]
    },
    orientation: "h",
    valueformat: ".0f",
    valuesuffix: "TWh",
    node: {
      pad: 15,
      thickness: 15,
      line: {
        color: "black",
        width: 0.5
      },
     label: [
     'online',
     'offlne',
     'meetings',
     'verification',
     'meetings',
     'kyc',
     'signups',
     'signups',
     'login',
     'login',
     'verification',
     'platform clicks',
     'interest indicated',
     'interest indicated',
     'commitment',
     'KYC processing',
     'KYC Completed',
     'sub docs processing',
     'sub docs submitted',
     'custody account',
     'Transfer Ownership',
     'Transfer Processing',
     'Transfer  Completed'],
    // color: fig.data[0].node.color
        },
  
    link: {
      source:[
      '1',
      '1',
      '2',
      '4',
      '2',
      '2',
      '3',
      '3',
      '4',
      '4',
      '5',
      '6',
      '7',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16'],
      target: 
      [
      '2',
      '2',
      '4',
      '7',
      '7',
      '3',
      '4',
      '5',
      '5',
      '6',
      '6',
      '7',
      '8',
      '9',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17'],
      value: [
        400,
        300,
        220,
        200,
        80,
        400,
        270,
        80,
        150,
        50,
        100,
        120,
        220,
        100,
        170,
        230,
        230,
        190,
        190,
        190,
        190,
        130,
        130],
      label: [
      'online',
      'offlne',
      'meetings',
      'verification',
      'meetings',
      'kyc',
      'signups',
      'signups',
      'login',
      'login',
      'verification',
      'platform clicks',
      'interest indicated',
      'interest indicated',
      'commitment',
      'KYC processing',
      'KYC Completed',
      'sub docs processing',
      'sub docs submitted',
      'custody account',
      'Transfer Ownership',
      'Transfer Processing',
      'Transfer  Completed']
    }
  }
  
  var data2 = [data2]
  
  var layout2 = {
    title: "Energy forecast for 2050<br>Source: Department of Energy & Climate Change, Tom Counsell via <a href='https://bost.ocks.org/mike/sankey/'>Mike Bostock</a>",
    width: 1400,
    height: 772,
    font: {
      size: 10
    }
  }

  const config = {responsive: true,
    scrollZoom: true}
  Plotly.newPlot('sankey2', data2, layout2, config)
