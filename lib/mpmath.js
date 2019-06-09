var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="mpmath.data";var REMOTE_PACKAGE_BASE="mpmath.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","mpmath",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/mpmath","tests",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/mpmath","libmp",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/mpmath","calculus",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/mpmath","functions",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/mpmath","matrices",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:1106788,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1521,2733,4153,5268,6561,8020,9362,10558,11552,12913,14169,15589,16934,18136,19607,20601,21560,22736,23805,25235,26359,27492,29187,30449,31739,32982,34136,35651,37115,38428,39644,41016,42340,43800,45246,46467,47736,48837,50218,51524,52845,53899,55136,56196,57509,58635,60132,61637,62840,64202,65457,66791,68215,69634,71128,72609,74123,75485,76957,78403,79763,81215,82480,83859,85395,86818,88408,89739,91262,92652,94095,95517,96840,98382,99826,101324,102687,104020,105390,106629,107880,109226,110634,112017,113566,114826,115920,117273,118735,119893,121385,122709,124023,125391,126849,128305,129741,131198,132582,133982,135376,136752,138143,139614,141029,142432,143684,145057,146455,147551,148968,150397,151789,153305,154700,156159,157273,158651,160080,161602,163182,164634,166161,167703,169084,170625,172021,173448,174768,176253,177214,178606,179988,181382,182683,184143,185582,186909,188227,189700,190869,192354,193785,195062,196492,197891,199079,200496,201916,203360,204800,206227,207543,208978,210355,211479,212899,214058,215546,216930,218112,219480,220840,222277,223649,224866,225718,226594,227600,228338,229579,230515,230956,231755,232894,233913,234793,235932,236802,237900,238993,240072,241156,242599,243879,245191,246114,247341,248445,249475,250394,251237,252214,253178,254181,255251,256611,257203,258003,259381,260335,260996,261568,262492,263308,264363,265463,266617,267862,269e3,270099,271297,272320,273513,274551,275594,276772,277845,278920,280035,280936,282090,283224,284595,285604,286920,288368,289726,290722,291698,292968,294107,295234,296291,296953,298128,299271,300301,301425,302669,303804,305132,306346,307512,308410,309250,309959,311111,311978,313206,314595,315961,317245,318395,319344,320291,321221,322481,323254,324408,324945,326016,326873,327962,329098,330178,331445,332446,333181,334018,335134,336381,337302,338903,340707,342515,344312,346145,347984,349783,351614,353432,355249,356784,358613,360457,362262,363546,364720,365554,366157,367293,368504,369634,370657,371666,372855,373969,374650,375499,376381,377265,378102,378962,379849,380656,381190,381798,382656,383506,384394,385200,386076,386935,387842,388712,389356,390203,391081,391971,392817,393686,394480,395203,395870,396595,397394,398199,398950,399790,400655,401551,402589,403859,405096,406202,407472,408396,409868,411190,412566,413644,414807,416182,417070,417716,418775,419465,419916,420605,421451,422634,423565,424359,425527,426662,427555,429528,430607,431415,431916,433109,434094,435268,436161,437314,438221,439167,440148,440894,442012,443085,444368,445560,446387,447383,448425,449256,449862,451080,452211,453311,454350,455524,456831,457847,458953,460211,461487,462757,463678,464561,465340,466122,467270,468279,468957,469735,470244,470963,471891,472685,473746,474545,475767,476998,478174,479350,480494,481560,482387,483039,483618,484660,485533,486213,487257,488476,489304,490376,491646,492227,493313,494449,495429,496411,497538,498981,500675,502395,503895,504964,505963,506952,507747,508606,509696,510665,511621,512482,513407,514240,515320,516120,517100,518131,519205,520039,521023,521971,522989,524088,525232,526392,527542,528572,529568,530530,531606,532788,533980,535374,536532,537888,538750,539707,540889,541918,543211,544341,545673,546675,547761,548794,549991,550995,552048,553273,554536,555821,557136,558416,559675,561052,562222,563285,564683,565932,567224,568584,569969,571361,572382,573313,574362,575550,576801,578101,579153,579759,581154,582182,583094,584196,585364,586587,587849,588778,589823,590502,591456,592652,593971,595007,596063,597185,598232,599429,600578,601524,602949,604208,605407,606790,608296,609220,610035,611157,612353,613681,614898,616292,617757,619108,620155,621535,622825,623976,625394,626623,627882,629201,630429,631473,632638,633846,635118,636239,637312,638355,639351,640644,642093,643696,645072,646422,647692,648973,650310,651637,653050,654316,655586,656854,658304,659645,660848,661980,663442,664698,665922,667237,668433,669595,670660,671710,672960,674197,675244,676411,677257,678471,679499,680660,681733,683088,684014,685295,686329,687464,688787,690093,691377,692751,694220,695679,697185,698529,699953,701275,702262,703303,704643,705758,706593,707559,708914,710125,711562,713006,714402,715588,716683,717491,718813,720319,721610,722865,724149,725408,726640,727696,728988,730203,731292,732525,733852,735262,736671,738084,739525,740897,742232,743552,744964,746299,747559,748905,750163,751525,752883,754301,755607,756942,758081,759512,760882,762260,763550,764791,766262,767787,769137,770521,771571,772607,773792,774962,776204,777436,778610,780064,781372,782837,784209,785546,786705,787960,789094,790395,791529,792692,793950,795140,796673,798010,799450,800804,802091,803416,804633,805850,807045,807900,809221,810490,811778,812908,814114,815470,816823,818171,819489,820745,822127,823494,824814,826231,827299,828109,828971,829856,830862,831814,832745,833603,834598,835481,836373,837400,838349,839314,840227,841044,841912,842621,843721,844915,845920,846735,847771,848826,850070,851418,852621,854064,855292,856369,857510,858734,859969,860955,862209,863300,864534,865613,866672,867964,868883,869761,871145,872572,873962,875126,876537,877483,878738,879808,881061,882174,883159,884308,885658,886645,887788,888788,889837,890843,891952,893201,894207,895331,896420,897511,898356,899449,900497,901584,902647,903671,904806,906117,907468,908591,909871,911157,912322,913741,914871,915672,916729,917952,919235,920510,921744,923008,924372,925591,926819,928108,929405,930806,932076,933338,934637,935671,936904,937964,939314,940556,941670,943119,944696,945941,947024,948159,949086,950148,951396,952725,953882,955001,956307,957701,959026,960420,961822,963111,964162,965579,966353,967735,969030,970311,971608,973095,974259,975442,976581,977712,978851,979997,981367,982609,983859,985008,986324,987636,988979,990175,991379,992258,993076,994136,995535,996868,998243,999507,1000451,1001690,1002911,1004093,1005292,1006535,1007824,1008728,1009645,1010918,1012089,1013134,1014327,1015578,1016866,1018124,1019213,1020331,1021486,1022490,1023668,1024743,1025706,1026683,1028017,1029359,1030604,1031749,1032890,1034140,1035378,1036635,1037744,1038908,1040223,1041315,1042096,1043226,1044397,1045714,1046871,1048239,1049282,1050436,1051407,1052490,1053497,1054461,1055317,1056347,1057288,1058565,1059838,1061036,1062376,1063414,1064775,1066085,1067255,1068328,1069642,1070618,1071795,1073044,1074145,1075225,1076582,1077676,1078946,1080077,1081270,1082664,1083781,1085042,1086370,1087634,1088828,1089985,1090925,1092259,1093176,1094111,1095099,1096213,1097570,1098358,1099183,1100224,1101218,1102387,1103610,1104781,1106081],sizes:[1521,1212,1420,1115,1293,1459,1342,1196,994,1361,1256,1420,1345,1202,1471,994,959,1176,1069,1430,1124,1133,1695,1262,1290,1243,1154,1515,1464,1313,1216,1372,1324,1460,1446,1221,1269,1101,1381,1306,1321,1054,1237,1060,1313,1126,1497,1505,1203,1362,1255,1334,1424,1419,1494,1481,1514,1362,1472,1446,1360,1452,1265,1379,1536,1423,1590,1331,1523,1390,1443,1422,1323,1542,1444,1498,1363,1333,1370,1239,1251,1346,1408,1383,1549,1260,1094,1353,1462,1158,1492,1324,1314,1368,1458,1456,1436,1457,1384,1400,1394,1376,1391,1471,1415,1403,1252,1373,1398,1096,1417,1429,1392,1516,1395,1459,1114,1378,1429,1522,1580,1452,1527,1542,1381,1541,1396,1427,1320,1485,961,1392,1382,1394,1301,1460,1439,1327,1318,1473,1169,1485,1431,1277,1430,1399,1188,1417,1420,1444,1440,1427,1316,1435,1377,1124,1420,1159,1488,1384,1182,1368,1360,1437,1372,1217,852,876,1006,738,1241,936,441,799,1139,1019,880,1139,870,1098,1093,1079,1084,1443,1280,1312,923,1227,1104,1030,919,843,977,964,1003,1070,1360,592,800,1378,954,661,572,924,816,1055,1100,1154,1245,1138,1099,1198,1023,1193,1038,1043,1178,1073,1075,1115,901,1154,1134,1371,1009,1316,1448,1358,996,976,1270,1139,1127,1057,662,1175,1143,1030,1124,1244,1135,1328,1214,1166,898,840,709,1152,867,1228,1389,1366,1284,1150,949,947,930,1260,773,1154,537,1071,857,1089,1136,1080,1267,1001,735,837,1116,1247,921,1601,1804,1808,1797,1833,1839,1799,1831,1818,1817,1535,1829,1844,1805,1284,1174,834,603,1136,1211,1130,1023,1009,1189,1114,681,849,882,884,837,860,887,807,534,608,858,850,888,806,876,859,907,870,644,847,878,890,846,869,794,723,667,725,799,805,751,840,865,896,1038,1270,1237,1106,1270,924,1472,1322,1376,1078,1163,1375,888,646,1059,690,451,689,846,1183,931,794,1168,1135,893,1973,1079,808,501,1193,985,1174,893,1153,907,946,981,746,1118,1073,1283,1192,827,996,1042,831,606,1218,1131,1100,1039,1174,1307,1016,1106,1258,1276,1270,921,883,779,782,1148,1009,678,778,509,719,928,794,1061,799,1222,1231,1176,1176,1144,1066,827,652,579,1042,873,680,1044,1219,828,1072,1270,581,1086,1136,980,982,1127,1443,1694,1720,1500,1069,999,989,795,859,1090,969,956,861,925,833,1080,800,980,1031,1074,834,984,948,1018,1099,1144,1160,1150,1030,996,962,1076,1182,1192,1394,1158,1356,862,957,1182,1029,1293,1130,1332,1002,1086,1033,1197,1004,1053,1225,1263,1285,1315,1280,1259,1377,1170,1063,1398,1249,1292,1360,1385,1392,1021,931,1049,1188,1251,1300,1052,606,1395,1028,912,1102,1168,1223,1262,929,1045,679,954,1196,1319,1036,1056,1122,1047,1197,1149,946,1425,1259,1199,1383,1506,924,815,1122,1196,1328,1217,1394,1465,1351,1047,1380,1290,1151,1418,1229,1259,1319,1228,1044,1165,1208,1272,1121,1073,1043,996,1293,1449,1603,1376,1350,1270,1281,1337,1327,1413,1266,1270,1268,1450,1341,1203,1132,1462,1256,1224,1315,1196,1162,1065,1050,1250,1237,1047,1167,846,1214,1028,1161,1073,1355,926,1281,1034,1135,1323,1306,1284,1374,1469,1459,1506,1344,1424,1322,987,1041,1340,1115,835,966,1355,1211,1437,1444,1396,1186,1095,808,1322,1506,1291,1255,1284,1259,1232,1056,1292,1215,1089,1233,1327,1410,1409,1413,1441,1372,1335,1320,1412,1335,1260,1346,1258,1362,1358,1418,1306,1335,1139,1431,1370,1378,1290,1241,1471,1525,1350,1384,1050,1036,1185,1170,1242,1232,1174,1454,1308,1465,1372,1337,1159,1255,1134,1301,1134,1163,1258,1190,1533,1337,1440,1354,1287,1325,1217,1217,1195,855,1321,1269,1288,1130,1206,1356,1353,1348,1318,1256,1382,1367,1320,1417,1068,810,862,885,1006,952,931,858,995,883,892,1027,949,965,913,817,868,709,1100,1194,1005,815,1036,1055,1244,1348,1203,1443,1228,1077,1141,1224,1235,986,1254,1091,1234,1079,1059,1292,919,878,1384,1427,1390,1164,1411,946,1255,1070,1253,1113,985,1149,1350,987,1143,1e3,1049,1006,1109,1249,1006,1124,1089,1091,845,1093,1048,1087,1063,1024,1135,1311,1351,1123,1280,1286,1165,1419,1130,801,1057,1223,1283,1275,1234,1264,1364,1219,1228,1289,1297,1401,1270,1262,1299,1034,1233,1060,1350,1242,1114,1449,1577,1245,1083,1135,927,1062,1248,1329,1157,1119,1306,1394,1325,1394,1402,1289,1051,1417,774,1382,1295,1281,1297,1487,1164,1183,1139,1131,1139,1146,1370,1242,1250,1149,1316,1312,1343,1196,1204,879,818,1060,1399,1333,1375,1264,944,1239,1221,1182,1199,1243,1289,904,917,1273,1171,1045,1193,1251,1288,1258,1089,1118,1155,1004,1178,1075,963,977,1334,1342,1245,1145,1141,1250,1238,1257,1109,1164,1315,1092,781,1130,1171,1317,1157,1368,1043,1154,971,1083,1007,964,856,1030,941,1277,1273,1198,1340,1038,1361,1310,1170,1073,1314,976,1177,1249,1101,1080,1357,1094,1270,1131,1193,1394,1117,1261,1328,1264,1194,1157,940,1334,917,935,988,1114,1357,788,825,1041,994,1169,1223,1171,1300,707],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_mpmath.data")}Module["addRunDependency"]("datafile_mpmath.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/mpmath-1.1.0-py3.7.egg-info",start:0,end:332,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/identification.py",start:332,end:29602,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/math2.py",start:29602,end:48163,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/__init__.py",start:48163,end:56763,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/function_docs.py",start:56763,end:337229,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/ctx_mp_python.py",start:337229,end:375342,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/usertools.py",start:375342,end:378371,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/ctx_fp.py",start:378371,end:384943,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/ctx_iv.py",start:384943,end:401741,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/rational.py",start:401741,end:407711,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/ctx_mp.py",start:407711,end:457383,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/visualization.py",start:457383,end:468010,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/ctx_base.py",start:468010,end:483995,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_functions2.py",start:483995,end:580985,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_hp.py",start:580985,end:591446,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_fp.py",start:591446,end:681443,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/__init__.py",start:681443,end:681443,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_linalg.py",start:681443,end:691899,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_pickle.py",start:691899,end:692300,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_calculus.py",start:692300,end:701271,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/torture.py",start:701271,end:709139,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_diff.py",start:709139,end:711605,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_bitwise.py",start:711605,end:719291,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_power.py",start:719291,end:724518,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_compatibility.py",start:724518,end:726824,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_str.py",start:726824,end:727368,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/extratest_gamma.py",start:727368,end:734596,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_trig.py",start:734596,end:739395,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/extratest_zeta.py",start:739395,end:740398,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_quad.py",start:740398,end:744152,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_matrices.py",start:744152,end:749570,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_convert.py",start:749570,end:758080,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_mpmath.py",start:758080,end:758276,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_levin.py",start:758276,end:763366,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_visualization.py",start:763366,end:764310,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_ode.py",start:764310,end:766132,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_division.py",start:766132,end:771472,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_gammazeta.py",start:771472,end:799135,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_eigen.py",start:799135,end:803040,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_basic_ops.py",start:803040,end:818239,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_special.py",start:818239,end:821087,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_eigen_symmetric.py",start:821087,end:829865,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/runtests.py",start:829865,end:834683,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_rootfinding.py",start:834683,end:837925,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_interval.py",start:837925,end:855058,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_elliptic.py",start:855058,end:879703,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_functions.py",start:879703,end:910658,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_summation.py",start:910658,end:912517,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/tests/test_identify.py",start:912517,end:913209,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/libmp/libmpi.py",start:913209,end:940831,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/libmp/__init__.py",start:940831,end:944691,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/libmp/libmpf.py",start:944691,end:989707,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/libmp/libintmath.py",start:989707,end:1006169,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/libmp/libmpc.py",start:1006169,end:1033038,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/libmp/backend.py",start:1033038,end:1035895,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/libmp/libhyper.py",start:1035895,end:1072519,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/libmp/six.py",start:1072519,end:1084374,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/libmp/libelefun.py",start:1084374,end:1128235,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/libmp/gammazeta.py",start:1128235,end:1207161,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/calculus/__init__.py",start:1207161,end:1207323,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/calculus/polynomials.py",start:1207323,end:1215177,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/calculus/calculus.py",start:1215177,end:1215276,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/calculus/extrapolation.py",start:1215276,end:1288565,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/calculus/odes.py",start:1288565,end:1298473,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/calculus/inverselaplace.py",start:1298473,end:1329608,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/calculus/approximation.py",start:1329608,end:1338425,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/calculus/optimization.py",start:1338425,end:1370844,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/calculus/quadrature.py",start:1370844,end:1409156,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/calculus/differentiation.py",start:1409156,end:1429382,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/__init__.py",start:1429382,end:1429690,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/theta.py",start:1429690,end:1467010,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/hypergeometric.py",start:1467010,end:1518580,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/qfunctions.py",start:1518580,end:1526213,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/expintegrals.py",start:1526213,end:1537857,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/orthogonal.py",start:1537857,end:1553954,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/bessel.py",start:1553954,end:1591892,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/elliptic.py",start:1591892,end:1630922,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/factorials.py",start:1630922,end:1636637,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/zeta.py",start:1636637,end:1673008,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/zetazeros.py",start:1673008,end:1703959,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/rszeta.py",start:1703959,end:1750143,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/functions/functions.py",start:1750143,end:1768204,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/matrices/__init__.py",start:1768204,end:1768298,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/matrices/calculus.py",start:1768298,end:1786907,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/matrices/linalg.py",start:1786907,end:1813927,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/matrices/matrices.py",start:1813927,end:1845522,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/matrices/eigen.py",start:1845522,end:1869904,audio:0},{filename:"/lib/python3.7/site-packages/mpmath/matrices/eigen_symmetric.py",start:1869904,end:1928428,audio:0}],remote_package_size:1110884,package_uuid:"fd84e1c1-f8da-49ed-84d7-707ae41e76e9"})})();