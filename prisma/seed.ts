import { prisma } from '../src/server/db/client';
// import jsonData from '../public/data/result.json';

const jsonData = [{
  "id": "cl5onycif0001g7w1tnac34pc",
  "src": "TCP_8814.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0002g7w11uja8arz",
  "src": "TCP_8821.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0003g7w1wdcgs369",
  "src": "TCP_8805-Pano-Edit.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycie0000g7w13s4k59zl",
  "src": "TCP_8811.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0004g7w1wnet3qau",
  "src": "TCP_8816.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0007g7w18a02n2r0",
  "src": "TCP_8855.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0005g7w10tdj83rf",
  "src": "TCP_8808.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0008g7w1icrktbg1",
  "src": "TCP_8860.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0006g7w1nrpt7g6y",
  "src": "TCP_8828-Pano.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0010g7w1t5o7hp6x",
  "src": "TCP_8877.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0009g7w1zyskcoq8",
  "src": "TCP_8863.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0011g7w16zcqcgfm",
  "src": "TCP_8878.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0012g7w19xxpz87h",
  "src": "TCP_8882.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0015g7w10upr0lrn",
  "src": "TCP_8875.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0013g7w1fxu0mycb",
  "src": "TCP_8888.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0016g7w15n2ady8s",
  "src": "TCP_8890.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0014g7w1w80i4vrb",
  "src": "TCP_8869.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0017g7w1xkxwb4oy",
  "src": "TCP_8893.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0018g7w1aqo6mzci",
  "src": "TCP_8906.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0019g7w171qgsi8y",
  "src": "TCP_8908.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0023g7w1xrcuaoqd",
  "src": "TCP_8921.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0021g7w1z8zd2l0b",
  "src": "TCP_8913.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0022g7w1hsrlhtuk",
  "src": "TCP_8915.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0020g7w1wlhycpqh",
  "src": "TCP_8912.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0025g7w1lmep1fgp",
  "src": "TCP_8926.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0024g7w19x1o7glk",
  "src": "TCP_8924.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0026g7w1tcionz8v",
  "src": "TCP_8933.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0027g7w1kb0emo42",
  "src": "TCP_8938.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0028g7w1zrbwdv0g",
  "src": "TCP_8945.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0029g7w18ykc1scq",
  "src": "TCP_8949.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0031g7w1hyb6lcv9",
  "src": "TCP_8956.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0030g7w1j1y4uuc6",
  "src": "TCP_8953.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0032g7w12ucaq6jr",
  "src": "TCP_8960.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0034g7w1lzfyqay4",
  "src": "TCP_9013.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0033g7w1b7degwt4",
  "src": "TCP_9008.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0036g7w1come50uy",
  "src": "TCP_9117.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0035g7w12z7eoyug",
  "src": "TCP_9087.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0037g7w1z64ruagm",
  "src": "TCP_9118-Pano-Edit-Edit.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0038g7w16gx7axwa",
  "src": "TCP_9131.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0040g7w1uyy25d4t",
  "src": "TCP_9135.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0039g7w1drupnjuq",
  "src": "TCP_9133.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0041g7w10v2bqrxo",
  "src": "TCP_9137.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0043g7w1d0dvzvov",
  "src": "TCP_9141.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0042g7w1yl6tbx1k",
  "src": "TCP_9139.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0044g7w1ehyl13b4",
  "src": "TCP_9142.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0045g7w1qcjgwpa8",
  "src": "TCP_9143.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0046g7w1c9e1wvk2",
  "src": "TCP_9145.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0048g7w1abgw926l",
  "src": "TCP_9148.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0051g7w1ld3sfnw1",
  "src": "TCP_8896.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0049g7w1jxysjse8",
  "src": "TCP_9149.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0050g7w1lddhtfxy",
  "src": "TCP_9150.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0053g7w10jovz0ty",
  "src": "TCP_9154.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0052g7w19x26lk99",
  "src": "TCP_9152.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0055g7w1qt0vid5e",
  "src": "TCP_9157.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0054g7w1mxkzwmye",
  "src": "TCP_9155.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0057g7w1hjdcjibg",
  "src": "TCP_9162.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0056g7w1xuno9uu4",
  "src": "TCP_9160.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0047g7w19crsiob5",
  "src": "TCP_9147.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0060g7w1oinxsf39",
  "src": "TCP_9173.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0063g7w1gqdeian7",
  "src": "TCP_9178.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0058g7w113vnl66b",
  "src": "TCP_9166.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0062g7w13c9bmesj",
  "src": "TCP_9177.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0061g7w10c903mru",
  "src": "TCP_9175.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0064g7w1b9rivl8u",
  "src": "TCP_9180.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0059g7w1tc8w71s7",
  "src": "TCP_9170.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0065g7w1obucciba",
  "src": "TCP_9181.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0066g7w1oqg6jy08",
  "src": "TCP_9188.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0067g7w1vz0jxcue",
  "src": "TCP_9203.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0068g7w14uncatdv",
  "src": "TCP_9214.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0069g7w1f9ubqck4",
  "src": "TCP_9217.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0071g7w1caw1173t",
  "src": "TCP_9264.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycif0070g7w1w3zyt485",
  "src": "TCP_9247-Edit.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycif0072g7w1eic1hx35",
  "src": "TCP_9289.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0074g7w1wz6lb5wc",
  "src": "TCP_9296.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0073g7w142zysp17",
  "src": "TCP_9291.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0075g7w1ru6d177j",
  "src": "TCP_9300.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0077g7w14xh59d0w",
  "src": "TCP_9305.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0078g7w1a3w88ska",
  "src": "TCP_8920.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0076g7w1pcn2j1bw",
  "src": "TCP_9304.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0080g7w1r5q03dae",
  "src": "TCP_9317.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0079g7w13j80yqq9",
  "src": "TCP_9314.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0082g7w168gx0bi1",
  "src": "TCP_9325.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0083g7w1pta16fhz",
  "src": "TCP_9327.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0081g7w19nyjlap0",
  "src": "TCP_9321.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0084g7w1gcndjlfb",
  "src": "TCP_9329.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0085g7w1766txqxr",
  "src": "TCP_9334.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0087g7w18bpm4qma",
  "src": "TCP_9340.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0086g7w1op5m0wp1",
  "src": "TCP_9337.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0088g7w19jcqr45t",
  "src": "TCP_9345.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0090g7w1901smr29",
  "src": "TCP_9352.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0089g7w194e593ii",
  "src": "TCP_9349.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0092g7w11lcuexw2",
  "src": "TCP_9363.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0091g7w1oe9z1ggk",
  "src": "TCP_9354.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0094g7w1mypg83y0",
  "src": "TCP_9368.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0093g7w1v1ygsg1k",
  "src": "TCP_9365.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0096g7w1y38chnsn",
  "src": "TCP_9375.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0097g7w16p1zf6c5",
  "src": "TCP_9377.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0095g7w1mjyrg5gc",
  "src": "TCP_9371.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0098g7w15p1xggss",
  "src": "TCP_9379.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0099g7w1jv5oey51",
  "src": "TCP_9381.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0100g7w1ug3kiwyh",
  "src": "TCP_9383.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0102g7w1eeyos8tn",
  "src": "TCP_9390.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0104g7w1s16z0nuv",
  "src": "TCP_9397.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0101g7w1fvsy9900",
  "src": "TCP_9386.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0103g7w1qhlr0sr8",
  "src": "TCP_9393.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0106g7w16ww9wb2g",
  "src": "TCP_9400.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0108g7w1btvez0ig",
  "src": "TCP_9405.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0105g7w1k4datlck",
  "src": "TCP_9399.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0107g7w1nizbk1kb",
  "src": "TCP_9404.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0109g7w1yrmhy2ja",
  "src": "TCP_9406.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0110g7w1z9on08mj",
  "src": "TCP_9414.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0113g7w1szj2qj8v",
  "src": "TCP_9442.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0112g7w1tuzgt6bo",
  "src": "TCP_9430-Pano-Edit.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0111g7w13kmva8r8",
  "src": "TCP_9419.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0115g7w1y9nfhne6",
  "src": "TCP_9460-Pano-Edit.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0116g7w1uwx4146b",
  "src": "TCP_9475.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0118g7w1pljypt2q",
  "src": "TCP_9480-Edit.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0121g7w11f9mgvkg",
  "src": "TCP_9517.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0120g7w1fz2s2j9p",
  "src": "TCP_9513.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0119g7w11ews3umc",
  "src": "TCP_9509.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0117g7w1swcmietm",
  "src": "TCP_9480-Edit-2.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0123g7w1sji4w2kl",
  "src": "TCP_9527.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0122g7w1kt9wpi7l",
  "src": "TCP_9526.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0127g7w1jnn2qeuy",
  "src": "TCP_9565.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0125g7w15vjbrl9l",
  "src": "TCP_9538.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0124g7w1ibn61rcm",
  "src": "TCP_9535.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0130g7w1sud0pto4",
  "src": "TCP_9590.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0129g7w11nw8hctb",
  "src": "TCP_9589.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0126g7w1p0h27ese",
  "src": "TCP_9539.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0128g7w1sta4inpm",
  "src": "TCP_9586.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0131g7w193fvp06a",
  "src": "TCP_9592.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0132g7w1sa51hwn3",
  "src": "TCP_9597.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0134g7w1wuyx53ay",
  "src": "TCP_9600.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0133g7w1w981c43q",
  "src": "TCP_9598.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0137g7w1ejfmfqzk",
  "src": "TCP_9625.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0135g7w1w4pqyg4m",
  "src": "TCP_9613.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0136g7w14mgn7yrr",
  "src": "TCP_9622.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0138g7w1ecs6hekk",
  "src": "TCP_9626.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0141g7w1tbaggywo",
  "src": "TCP_9639.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0139g7w1f7ac9pdu",
  "src": "TCP_9629.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0140g7w182d2aclr",
  "src": "TCP_9632.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0142g7w14k5bl4zm",
  "src": "TCP_9640.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0143g7w1nl1qomb1",
  "src": "TCP_9643.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0144g7w1tpogg7c8",
  "src": "TCP_9645.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0146g7w168bo437m",
  "src": "TCP_9650.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0145g7w14by5kj5e",
  "src": "TCP_9649.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0147g7w1n580p2qc",
  "src": "TCP_9652.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0148g7w1mtx3sr1k",
  "src": "TCP_9653.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0149g7w1htu5ox4j",
  "src": "TCP_9657.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0150g7w11z3q2a4g",
  "src": "TCP_9661.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0153g7w1k20596wh",
  "src": "TCP_9677.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0151g7w1bvdsqcsg",
  "src": "TCP_9664.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0152g7w1rp4sr9mw",
  "src": "TCP_9670.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0154g7w1lny0hynf",
  "src": "TCP_9679.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0155g7w1pbbx6wxb",
  "src": "TCP_9680.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycig0157g7w19xmme72d",
  "src": "TCP_9690.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0158g7w16aprbwxj",
  "src": "TCP_9693.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0156g7w1zhnucbvh",
  "src": "TCP_9686.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycih0160g7w15tz0calr",
  "src": "TCP_8928.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycih0162g7w17w9ovlyv",
  "src": "TCP_9707.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycig0159g7w1hbvnrx1d",
  "src": "TCP_9695.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycih0161g7w1szov7y32",
  "src": "TCP_9702.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycih0166g7w10y022445",
  "src": "TCP_9730.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycih0164g7w1h0tmapxr",
  "src": "TCP_9718.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycih0165g7w1lkbr0ogd",
  "src": "TCP_9729.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycih0163g7w1a78x5s8v",
  "src": "TCP_9710.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycih0167g7w1mjrmurkm",
  "src": "TCP_9735.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycih0168g7w1ggy6zmvi",
  "src": "TCP_9151.jpg",
  "likes": 0,
  "orientation": "portrait"
},{
  "id": "cl5onycih0169g7w1l9eey3aj",
  "src": "TCP_9700.jpg",
  "likes": 0,
  "orientation": "landscape"
},{
  "id": "cl5onycih0170g7w1v5f00r4u",
  "src": "TCP_9311.jpg",
  "likes": 0,
  "orientation": "portrait"
}]

const load = async () => {

   const res = await prisma.image.createMany({data: jsonData});
  //  console.log("???? ~ file: seed.ts ~ line 859 ~ load ~ res", res)

};

load()
.catch((e) => {
  console.error(e)
  process.exit(1)
})
.finally(async () => {
  await prisma.$disconnect()
})