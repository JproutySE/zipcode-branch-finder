const branchData = {
  Knoxville: [
    "37701", "37705", "37708", "37709", "37710", "37714", "37715", "37716", "37721", "37722", "37724", "37725",
    "37729", "37737", "37738", "37742", "37748", "37752", "37754", "37757", "37760", "37763", "37764", "37766",
    "37769", "37771", "37772", "37774", "37777", "37779", "37801", "37803", "37804", "37806", "37807", "37813",
    "37814", "37820", "37821", "37825", "37828", "37830", "37840", "37845", "37848", "37849", "37853", "37861",
    "37862", "37863", "37865", "37866", "37870", "37871", "37876", "37877", "37879", "37886", "37888", "37890",
    "37902", "37909", "37912", "37914", "37915", "37916", "37917", "37918", "37919", "37920", "37921", "37922",
    "37923", "37924", "37929", "37931", "37931", "37932", "37932", "37934", "37934", "37938", "37938", "37996"
  ],
  Nashville: [
    "37012", "37013", "37014", "37015", "37022", "37027", "37030", "37031", "37032", "37035", "37036", "37040",
    "37042", "37043", "37046", "37048", "37049", "37057", "37060", "37062", "37064", "37066", "37067", "37069",
    "37072", "37073", "37074", "37075", "37076", "37080", "37082", "37085", "37086", "37087", "37090", "37115",
    "37122", "37127", "37128", "37129", "37130", "37135", "37138", "37141", "37143", "37145", "37146", "37148",
    "37151", "37153", "37167", "37172", "37174", "37179", "37184", "37186", "37187", "37188", "37189", "37201",
    "37203", "37204", "37205", "37206", "37207", "37208", "37209", "37210", "37211", "37212", "37213", "37214",
    "37215", "37216", "37217", "37218", "37219", "37220", "37221", "38501", "38506", "38544", "38545", "38547",
    "38548", "38552", "38560", "38563", "38564", "38567", "38569", "38582", "38501", "38506", "38544", "40109",
    "40003", "40004", "40008", "40009", "40010", "40011", "40012", "40013", "40014", "40019", "40022", "40023",
    "40025", "40026", "40031", "40033", "40037", "40040", "40046", "40047", "40050", "40051", "40052", "40055",
    "40056", "40057", "40059", "40060", "40062", "40065", "40067", "40068", "40069", "40070", "40071", "40076",
    "40078", "40107", "40108", "40109", "40110", "40115", "40117", "40118", "40119", "40121", "40140", "40142",
    "40143", "40144", "40145", "40146", "40150", "40152", "40155", "40160", "40162", "40165", "40175", "40176",
    "40177", "40178", "40202", "40203", "40204", "40205", "40206", "40207", "40208", "40209", "40210", "40211",
    "40212", "40213", "40214", "40215", "40216", "40217", "40218", "40219", "40220", "40222", "40223", "40228",
    "40229", "40241", "40242", "40243", "40245", "40258", "40272", "40291", "40299", "40324", "40328", "40330",
    "40342", "40347", "40353", "40356", "40361", "40370", "40372", "40379", "40383", "40390", "40391", "40403",
    "40422", "40440", "40444", "40461", "40464", "40468", "40475", "40502", "40503", "40503", "40504", "40505",
    "40507", "40508", "40509", "40510", "40511", "40513", "40514", "40515", "40516", "40517", "40601", "41008",
    "41031", "42127", "42160", "42207", "42210", "42259", "42285", "42701", "42712", "42713", "42716", "42718",
    "42721", "42722", "42724", "42726", "42729", "42732", "42740", "42743", "42746", "42748", "42749", "42754",
    "42757", "42762", "42764", "42765", "42776", "42782", "42784", "42788", "47106", "47111", "47112", "47117",
    "47119", "47122", "47124", "47126", "47129", "47130", "47135", "47136", "47143", "47150", "47161", "47164",
    "47165", "47167", "47172"
  ],
  Absolute: [
    // trimmed for brevity...
  ],
  Dales: [
    // trimmed for brevity...
  ]
};

function findBranch() {
  const zipcode = document.getElementById("zipcodeInput").value.trim();
  let branchName = "No branch found for this zipcode.";

  for (const branch in branchData) {
    if (branchData[branch].includes(zipcode)) {
      branchName = branch;
      break;
    }
  }

  document.getElementById("result").innerText = branchName;
}
