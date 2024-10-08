import React from 'react';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const rrWords = (msg) => {
  const words = ['a', 'love', 'and', 'run', 'down', 'guy', 'from', 'to', 'cry', "we've", "we're", "commitment's", "you're", 'but', 'we', 'lie', 'for', 'gotta', 'how', 'on', 'desert', 'aching,', "what's", 'wanna', 'up', 'me', 'your', 'a', 'so', 'do', 'see', 'ask', 'been', 'hurt', 'full', 'inside,', 'each', 'we', 'know', 'get', 'game', 'any', 'and', 'feeling', 'understand', 'never', 'rules', 'gonna', "heart's", 'play', 'make', 'too', 'around', "we're", 'both', "don't", 'tell', 'give', 'i', 'goodbye', 'no', 'going', 'blind', 'it', 'shy', 'if', 'you', 'what', 'this', 'of', 'just', 'long', 'thinking', 'other', 'you', "wouldn't", 'say', 'give,', 'let', 'known', 'strangers', 'the', 'never', "i'm"];
  return words.includes(msg.toLowerCase());
}

const states = (msg) => {
  // https://github.com/rreichel3/US-Stock-Symbols/blob/main/nasdaq/nasdaq_tickers.txt
  const tickers = new Set(['AACG', 'AADI', 'AAGR', 'AAGRW', 'AAL', 'AAME', 'AAOI', 'AAON', 'AAPL', 'ABAT', 'ABCL', 'ABEO', 'ABL', 'ABLLL', 'ABLLW', 'ABLV', 'ABLVW', 'ABNB', 'ABOS', 'ABSI', 'ABTS', 'ABUS', 'ABVC', 'ABVE', 'ABVEW', 'ABVX', 'ACAB', 'ACABW', 'ACAC', 'ACACW', 'ACAD', 'ACB', 'ACCD', 'ACDC', 'ACET', 'ACGL', 'ACGLN', 'ACGLO', 'ACHC', 'ACHL', 'ACHV', 'ACIC', 'ACIU', 'ACIW', 'ACLS', 'ACLX', 'ACMR', 'ACNB', 'ACNT', 'ACON', 'ACONW', 'ACRS', 'ACRV', 'ACST', 'ACT', 'ACTG', 'ACTU', 'ACVA', 'ACXP', 'ADAG', 'ADAP', 'ADBE', 'ADD', 'ADEA', 'ADGM', 'ADI', 'ADIL', 'ADMA', 'ADN', 'ADNWW', 'ADP', 'ADPT', 'ADSE', 'ADSEW', 'ADSK', 'ADTN', 'ADTX', 'ADUS', 'ADV', 'ADVM', 'ADVWW', 'ADXN', 'AEAE', 'AEHL', 'AEHR', 'AEI', 'AEIS', 'AEMD', 'AENT', 'AENTW', 'AEP', 'AERT', 'AEYE', 'AFBI', 'AFCG', 'AFJK', 'AFMD', 'AFRI', 'AFRIW', 'AFRM', 'AFYA', 'AGAE', 'AGBA', 'AGBAW', 'AGEN', 'AGFY', 'AGIO', 'AGMH', 'AGNC', 'AGNCL', 'AGNCM', 'AGNCN', 'AGNCO', 'AGNCP', 'AGRI', 'AGYS', 'AHCO', 'AHG', 'AIEV', 'AIFF', 'AIHS', 'AILE', 'AILEW', 'AIMAU', 'AIMAW', 'AIMBU', 'AIMD', 'AIOT', 'AIP', 'AIRE', 'AIRG', 'AIRJ', 'AIRJW', 'AIRS', 'AIRT', 'AIRTP', 'AISP', 'AISPW', 'AITR', 'AITRU', 'AIXI', 'AKAM', 'AKAN', 'AKBA', 'AKRO', 'AKTS', 'AKTX', 'AKYA', 'ALAB', 'ALAR', 'ALBT', 'ALCE', 'ALCO', 'ALCY', 'ALCYU', 'ALCYW', 'ALDX', 'ALEC', 'ALF', 'ALFUU', 'ALFUW', 'ALGM', 'ALGN', 'ALGS', 'ALGT', 'ALHC', 'ALIM', 'ALKS', 'ALKT', 'ALLK', 'ALLO', 'ALLR', 'ALLT', 'ALMS', 'ALNT', 'ALNY', 'ALOT', 'ALPP', 'ALRM', 'ALRN', 'ALRS', 'ALSA', 'ALSAR', 'ALSAU', 'ALSAW', 'ALT', 'ALTI', 'ALTO', 'ALTR', 'ALTS', 'ALVO', 'ALVOW', 'ALVR', 'ALXO', 'ALZN', 'AMAL', 'AMAT', 'AMBA', 'AMCX', 'AMD', 'AMED', 'AMGN', 'AMIX', 'AMKR', 'AMLI', 'AMLX', 'AMPG', 'AMPH', 'AMPL', 'AMRK', 'AMRN', 'AMRX', 'AMSC', 'AMSF', 'AMST', 'AMSWA', 'AMTX', 'AMWD', 'AMZN', 'ANAB', 'ANDE', 'ANEB', 'ANGH', 'ANGHW', 'ANGI', 'ANGO', 'ANIK', 'ANIP', 'ANIX', 'ANL', 'ANNX', 'ANSC', 'ANSCU', 'ANSCW', 'ANSS', 'ANTE', 'ANTX', 'ANY', 'AOGO', 'AOGOW', 'AOSL', 'AOUT', 'APA', 'APCX', 'APCXW', 'APDN', 'APEI', 'APGE', 'API', 'APLD', 'APLM', 'APLMW', 'APLS', 'APLT', 'APM', 'APOG', 'APP', 'APPF', 'APPN', 'APPS', 'APRE', 'APTO', 'APVO', 'APWC', 'APXI', 'APXIW', 'APYX', 'AQB', 'AQMS', 'AQST', 'AQU', 'AQUNU', 'ARAY', 'ARBB', 'ARBE', 'ARBEW', 'ARBK', 'ARBKL', 'ARCB', 'ARCC', 'ARCT', 'ARDX', 'AREB', 'AREBW', 'AREC', 'ARGX', 'ARHS', 'ARKO', 'ARKOW', 'ARKR', 'ARLP', 'ARM', 'AROW', 'ARQ', 'ARQQ', 'ARQQW', 'ARQT', 'ARRY', 'ARTL', 'ARTNA', 'ARTV', 'ARTW', 'ARVN', 'ARWR', 'ASCB', 'ASCBR', 'ASCBU', 'ASLE', 'ASMB', 'ASML', 'ASND', 'ASNS', 'ASO', 'ASPI', 'ASPS', 'ASRT', 'ASRV', 'ASST', 'ASTC', 'ASTE', 'ASTH', 'ASTI', 'ASTL', 'ASTLW', 'ASTS', 'ASTSW', 'ASUR', 'ASYS', 'ATAI', 'ATAT', 'ATCOL', 'ATEC', 'ATER', 'ATEX', 'ATGL', 'ATHA', 'ATHE', 'ATIF', 'ATLC', 'ATLCL', 'ATLCP', 'ATLCZ', 'ATLO', 'ATLX', 'ATMC', 'ATMV', 'ATMVR', 'ATNF', 'ATNFW', 'ATNI', 'ATOM', 'ATOS', 'ATPC', 'ATRA', 'ATRC', 'ATRO', 'ATSG', 'ATXG', 'ATXI', 'ATXS', 'ATYR', 'AUBN', 'AUDC', 'AUGX', 'AUID', 'AUPH', 'AUR', 'AURA', 'AUROW', 'AUTL', 'AUUD', 'AUUDW', 'AVAH', 'AVAV', 'AVBP', 'AVDL', 'AVDX', 'AVGO', 'AVGR', 'AVIR', 'AVNW', 'AVO', 'AVPT', 'AVPTW', 'AVT', 'AVTE', 'AVTX', 'AVXL', 'AWH', 'AWRE', 'AXDX', 'AXGN', 'AXNX', 'AXON', 'AXSM', 'AXTI', 'AY', 'AYRO', 'AYTU', 'AZ', 'AZI', 'AZN', 'AZPN', 'AZTA', 'BACK', 'BAER', 'BAERW', 'BAFN', 'BAND', 'BANF', 'BANFP', 'BANL', 'BANR', 'BANX', 'BAOS', 'BASE', 'BATRA', 'BATRK', 'BAYA', 'BAYAR', 'BAYAU', 'BBCP', 'BBGI', 'BBIO', 'BBLG', 'BBSI', 'BCAB', 'BCAL', 'BCAN', 'BCBP', 'BCDA', 'BCG', 'BCGWW', 'BCLI', 'BCML', 'BCOV', 'BCOW', 'BCPC', 'BCRX', 'BCSA', 'BCSAU', 'BCSAW', 'BCTX', 'BCTXW', 'BCYC', 'BDRX', 'BDSX', 'BDTX', 'BEAM', 'BEAT', 'BEATW', 'BECN', 'BEEM', 'BELFA', 'BELFB', 'BENF', 'BENFW', 'BETR', 'BETRW', 'BFC', 'BFI', 'BFIIW', 'BFIN', 'BFRG', 'BFRGW', 'BFRI', 'BFST', 'BGC', 'BGFV', 'BGLC', 'BGM', 'BGNE', 'BGXX', 'BHAC', 'BHACU', 'BHACW', 'BHAT', 'BHF', 'BHFAL', 'BHFAM', 'BHFAN', 'BHFAO', 'BHFAP', 'BHIL', 'BHRB', 'BIAF', 'BIAFW', 'BIDU', 'BIGC', 'BIIB', 'BILI', 'BIOR', 'BIOX', 'BIRD', 'BITF', 'BIVI', 'BJDX', 'BJRI', 'BKHA', 'BKHAR', 'BKHAU', 'BKNG', 'BKR', 'BKYI', 'BL', 'BLAC', 'BLACR', 'BLACU', 'BLACW', 'BLBD', 'BLBX', 'BLDE', 'BLDEW', 'BLDP', 'BLEU', 'BLEUR', 'BLFS', 'BLFY', 'BLIN', 'BLKB', 'BLMN', 'BLMZ', 'BLNK', 'BLRX', 'BLTE', 'BLUE', 'BLZE', 'BMBL', 'BMEA', 'BMR', 'BMRA', 'BMRC', 'BMRN', 'BNAI', 'BNAIW', 'BNGO', 'BNIX', 'BNIXR', 'BNOX', 'BNR', 'BNRG', 'BNTC', 'BNTX', 'BNZI', 'BNZIW', 'BOCN', 'BOF', 'BOKF', 'BOLD', 'BOLT', 'BON', 'BOOM', 'BOSC', 'BOTJ', 'BOWN', 'BOWNR', 'BOXL', 'BPMC', 'BPOP', 'BPOPM', 'BPRN', 'BPTH', 'BPYPM', 'BPYPN', 'BPYPO', 'BPYPP', 'BRAC', 'BRAG', 'BREA', 'BRFH', 'BRID', 'BRKH', 'BRKHU', 'BRKHW', 'BRKL', 'BRKR', 'BRLS', 'BRLSW', 'BRLT', 'BRNS', 'BROG', 'BROGW', 'BRTX', 'BRY', 'BRZE', 'BSBK', 'BSET', 'BSFC', 'BSIIU', 'BSLK', 'BSLKW', 'BSRR', 'BSVN', 'BSY', 'BTAI', 'BTBD', 'BTBDW', 'BTBT', 'BTCS', 'BTCT', 'BTCTW', 'BTDR', 'BTM', 'BTMD', 'BTMWW', 'BTOC', 'BTOG', 'BTSG', 'BTSGU', 'BUJA', 'BUJAU', 'BUJAW', 'BUSE', 'BVFL', 'BVS', 'BWAY', 'BWB', 'BWBBP', 'BWEN', 'BWFG', 'BWIN', 'BWMN', 'BYFC', 'BYND', 'BYNO', 'BYNOU', 'BYRN', 'BYSI', 'BYU', 'BZ', 'BZFD', 'BZFDW', 'BZUN', 'CAAS', 'CABA', 'CAC', 'CACC', 'CACO', 'CADL', 'CAKE', 'CALC', 'CALM', 'CALT', 'CAMT', 'CAN', 'CAPR', 'CAPT', 'CAPTW', 'CAR', 'CARA', 'CARE', 'CARG', 'CARM', 'CART', 'CARV', 'CASH', 'CASI', 'CASS', 'CASY', 'CATY', 'CBAN', 'CBAT', 'CBFV', 'CBNK', 'CBRG', 'CBRL', 'CBSH', 'CBUS', 'CCAP', 'CCB', 'CCBG', 'CCCC', 'CCCS', 'CCD', 'CCEC', 'CCEP', 'CCG', 'CCGWW', 'CCIX', 'CCIXU', 'CCIXW', 'CCLD', 'CCLDO', 'CCLDP', 'CCNE', 'CCNEP', 'CCOI', 'CCRN', 'CCSI', 'CCTG', 'CCTS', 'CDAQ', 'CDIO', 'CDIOW', 'CDLX', 'CDMO', 'CDNA', 'CDNS', 'CDRO', 'CDROW', 'CDT', 'CDTG', 'CDTX', 'CDW', 'CDXC', 'CDXS', 'CDZI', 'CDZIP', 'CEAD', 'CEADW', 'CECO', 'CEG', 'CELC', 'CELH', 'CELU', 'CELUW', 'CELZ', 'CENN', 'CENT', 'CENTA', 'CENX', 'CEP', 'CERO', 'CEROW', 'CERS', 'CERT', 'CETX', 'CETY', 'CEVA', 'CFB', 'CFBK', 'CFFI', 'CFFN', 'CFFS', 'CFFSW', 'CFLT', 'CFSB', 'CG', 'CGABL', 'CGBD', 'CGBDL', 'CGBS', 'CGBSW', 'CGC', 'CGEM', 'CGEN', 'CGNT', 'CGNX', 'CGO', 'CGON', 'CGTX', 'CHCI', 'CHCO', 'CHDN', 'CHEF', 'CHEK', 'CHI', 'CHK', 'CHKEL', 'CHKEW', 'CHKEZ', 'CHKP', 'CHMG', 'CHNR', 'CHR', 'CHRD', 'CHRS', 'CHRW', 'CHSCL', 'CHSCM', 'CHSCN', 'CHSCO', 'CHSCP', 'CHSN', 'CHTR', 'CHUY', 'CHW', 'CHX', 'CHY', 'CIFR', 'CIFRW', 'CIGI', 'CINF', 'CING', 'CINGW', 'CISO', 'CISS', 'CITE', 'CITEU', 'CITEW', 'CIVB', 'CJET', 'CJJD', 'CKPT', 'CLAR', 'CLBK', 'CLBT', 'CLBTW', 'CLDX', 'CLEU', 'CLFD', 'CLGN', 'CLIR', 'CLLS', 'CLMB', 'CLMT', 'CLNE', 'CLNN', 'CLNNW', 'CLOV', 'CLPS', 'CLPT', 'CLRB', 'CLRC', 'CLRO', 'CLSD', 'CLSK', 'CLST', 'CLWT', 'CMAX', 'CMAXW', 'CMBM', 'CMCO', 'CMCSA', 'CMCT', 'CME', 'CMLS', 'CMMB', 'CMND', 'CMPO', 'CMPOW', 'CMPR', 'CMPS', 'CMPX', 'CMRX', 'CMTL', 'CNDT', 'CNET', 'CNEY', 'CNFR', 'CNFRZ', 'CNOB', 'CNOBP', 'CNSL', 'CNSP', 'CNTA', 'CNTB', 'CNTM', 'CNTX', 'CNTY', 'CNVS', 'CNXC', 'CNXN', 'COCH', 'COCHW', 'COCO', 'COCP', 'CODA', 'CODX', 'COEP', 'COEPW', 'COFS', 'COGT', 'COHU', 'COIN', 'COKE', 'COLB', 'COLL', 'COLM', 'COMM', 'COO', 'COOP', 'COOT', 'COOTW', 'CORT', 'CORZ', 'CORZW', 'CORZZ', 'COSM', 'COST', 'COYA', 'CPB', 'CPBI', 'CPHC', 'CPIX', 'CPOP', 'CPRT', 'CPRX', 'CPSH', 'CPSS', 'CPTN', 'CPTNW', 'CPZ', 'CRAI', 'CRBP', 'CRBU', 'CRCT', 'CRDF', 'CRDL', 'CRDO', 'CREG', 'CRESW', 'CRESY', 'CREV', 'CREVW', 'CREX', 'CRGO', 'CRGX', 'CRIS', 'CRKN', 'CRMD', 'CRML', 'CRMLW', 'CRMT', 'CRNC', 'CRNT', 'CRNX', 'CRON', 'CROX', 'CRSP', 'CRSR', 'CRTO', 'CRUS', 'CRVL', 'CRVO', 'CRVS', 'CRWD', 'CRWS', 'CSBR', 'CSCI', 'CSCO', 'CSGP', 'CSGS', 'CSIQ', 'CSLM', 'CSLMR', 'CSLMU', 'CSLR', 'CSLRW', 'CSPI', 'CSQ', 'CSTE', 'CSTL', 'CSWC', 'CSWCZ', 'CSWI', 'CSX', 'CTAS', 'CTBI', 'CTCX', 'CTHR', 'CTKB', 'CTLP', 'CTMX', 'CTNM', 'CTNT', 'CTOR', 'CTRM', 'CTRN', 'CTSH', 'CTSO', 'CTXR', 'CUB', 'CUBA', 'CUBWU', 'CUBWW', 'CUE', 'CURI', 'CURIW', 'CURR', 'CUTR', 'CVAC', 'CVBF', 'CVCO', 'CVGI', 'CVGW', 'CVKD', 'CVLT', 'CVRX', 'CVV', 'CWBC', 'CWCO', 'CWD', 'CWST', 'CXAI', 'CXAIW', 'CXDO', 'CYBR', 'CYCC', 'CYCCP', 'CYCN', 'CYN', 'CYRX', 'CYTH', 'CYTHW', 'CYTK', 'CYTO', 'CZFS', 'CZNC', 'CZR', 'CZWI', 'DADA', 'DAIO', 'DAKT', 'DALN', 'DARE', 'DASH', 'DATS', 'DATSW', 'DAVE', 'DAVEW', 'DAWN', 'DBGI', 'DBGIW', 'DBVT', 'DBX', 'DCBO', 'DCGO', 'DCOM', 'DCOMG', 'DCOMP', 'DCTH', 'DDI', 'DDOG', 'DECA', 'DECAW', 'DENN', 'DERM', 'DFLI', 'DGHI', 'DGICA', 'DGICB', 'DGII', 'DGLY', 'DH', 'DHAI', 'DHAIW', 'DHC', 'DHCNI', 'DHCNL', 'DHIL', 'DIBS', 'DIOD', 'DIST', 'DJCO', 'DJT', 'DJTWW', 'DKNG', 'DLHC', 'DLO', 'DLPN', 'DLTH', 'DLTR', 'DMAC', 'DMLP', 'DMRC', 'DNLI', 'DNTH', 'DNUT', 'DOCU', 'DOGZ', 'DOMH', 'DOMO', 'DOOO', 'DORM', 'DOX', 'DOYU', 'DPCS', 'DPRO', 'DRCT', 'DRIO', 'DRMA', 'DRRX', 'DRS', 'DRTS', 'DRTSW', 'DRUG', 'DRVN', 'DSGN', 'DSGR', 'DSGX', 'DSP', 'DSWL', 'DSY', 'DSYWW', 'DTCK', 'DTI', 'DTIL', 'DTSQU', 'DTSS', 'DTST', 'DTSTW', 'DUET', 'DUO', 'DUOL', 'DUOT', 'DVAX', 'DWSN', 'DXCM', 'DXLG', 'DXPE', 'DXR', 'DXYN', 'DYAI', 'DYCQ', 'DYN', 'EA', 'EAST', 'EBAY', 'EBC', 'EBMT', 'EBON', 'EBTC', 'ECBK', 'ECDA', 'ECDAW', 'ECOR', 'ECPG', 'ECX', 'ECXWW', 'EDAP', 'EDBL', 'EDBLW', 'EDIT', 'EDRY', 'EDSA', 'EDTK', 'EDUC', 'EEFT', 'EEIQ', 'EFOI', 'EFSC', 'EFSCP', 'EGAN', 'EGBN', 'EGHT', 'EGIO', 'EGRX', 'EH', 'EHGO', 'EHTH', 'EJH', 'EKSO', 'ELAB', 'ELBM', 'ELDN', 'ELEV', 'ELSE', 'ELTK', 'ELTX', 'ELUT', 'ELVA', 'ELVN', 'ELWS', 'ELYM', 'EM', 'EMBC', 'EMCG', 'EMCGW', 'EMKR', 'EML', 'ENG', 'ENGN', 'ENGNW', 'ENLT', 'ENLV', 'ENPH', 'ENSC', 'ENSG', 'ENTA', 'ENTG', 'ENTO', 'ENTX', 'ENVB', 'ENVX', 'EOLS', 'EOSE', 'EOSEW', 'EPIX', 'EPOW', 'EPRX', 'EPSN', 'EQ', 'EQIX', 'ERAS', 'ERIC', 'ERIE', 'ERII', 'ERNA', 'ESCA', 'ESEA', 'ESGL', 'ESGLW', 'ESGR', 'ESGRO', 'ESGRP', 'ESHA', 'ESHAR', 'ESLA', 'ESLAW', 'ESLT', 'ESOA', 'ESPR', 'ESQ', 'ESSA', 'ESTA', 'ETHA', 'ETNB', 'ETON', 'ETSY', 'EU', 'EUDA', 'EUDAW', 'EURKU', 'EVAX', 'EVCM', 'EVER', 'EVGN', 'EVGO', 'EVGOW', 'EVGR', 'EVGRU', 'EVGRW', 'EVLV', 'EVLVW', 'EVO', 'EVOK', 'EVRG', 'EVTV', 'EWBC', 'EWCZ', 'EWTX', 'EXAI', 'EXAS', 'EXC', 'EXEL', 'EXFY', 'EXLS', 'EXPE', 'EXPI', 'EXPO', 'EXTR', 'EYE', 'EYEN', 'EYPT', 'EZFL', 'EZGO', 'EZPW', 'FA', 'FAAS', 'FAASW', 'FAMI', 'FANG', 'FANH', 'FARM', 'FARO', 'FAST', 'FAT', 'FATBB', 'FATBP', 'FATBW', 'FATE', 'FBIO', 'FBIOP', 'FBIZ', 'FBLG', 'FBNC', 'FBRX', 'FBYD', 'FBYDW', 'FCAP', 'FCBC', 'FCCO', 'FCEL', 'FCFS', 'FCNCA', 'FCNCO', 'FCNCP', 'FCUV', 'FDBC', 'FDMT', 'FDSB', 'FDUS', 'FEAM', 'FEBO', 'FEIM', 'FELE', 'FEMY', 'FENC', 'FER', 'FFBC', 'FFIC', 'FFIE', 'FFIEW', 'FFIN', 'FFIV', 'FFNW', 'FGBI', 'FGBIP', 'FGEN', 'FGF', 'FGFPP', 'FGI', 'FHB', 'FHTX', 'FIAC', 'FIACU', 'FIACW', 'FIBK', 'FINW', 'FIP', 'FISI', 'FITB', 'FITBI', 'FITBO', 'FITBP', 'FIVE', 'FIVN', 'FIZZ', 'FKWL', 'FLD', 'FLDDU', 'FLDDW', 'FLEX', 'FLGC', 'FLGT', 'FLIC', 'FLL', 'FLNC', 'FLNT', 'FLUX', 'FLWS', 'FLXS', 'FLYE', 'FLYW', 'FMAO', 'FMBH', 'FMNB', 'FMST', 'FNGR', 'FNKO', 'FNLC', 'FNVT', 'FNVTU', 'FNVTW', 'FNWB', 'FNWD', 'FOLD', 'FONR', 'FORA', 'FORD', 'FORL', 'FORM', 'FORR', 'FORTY', 'FOSL', 'FOSLL', 'FOX', 'FOXA', 'FOXF', 'FPAY', 'FRAF', 'FRBA', 'FRES', 'FRGT', 'FRHC', 'FRLA', 'FRLAU', 'FRME', 'FRMEP', 'FROG', 'FRPH', 'FRPT', 'FRSH', 'FRST', 'FRSX', 'FRZA', 'FSBC', 'FSBW', 'FSEA', 'FSFG', 'FSHP', 'FSHPR', 'FSHPU', 'FSLR', 'FSTR', 'FSUN', 'FSV', 'FTAI', 'FTAIM', 'FTAIN', 'FTAIO', 'FTAIP', 'FTCI', 'FTDR', 'FTEK', 'FTEL', 'FTFT', 'FTHM', 'FTII', 'FTLF', 'FTNT', 'FTRE', 'FUFU', 'FUFUW', 'FULC', 'FULT', 'FULTP', 'FUNC', 'FUND', 'FUSB', 'FUTU', 'FVCB', 'FWONA', 'FWONK', 'FWRD', 'FWRG', 'FXNC', 'FYBR', 'GABC', 'GAIA', 'GAIN', 'GAINL', 'GAINN', 'GAINZ', 'GALT', 'GAMB', 'GAME', 'GAN', 'GANX', 'GAQ', 'GASS', 'GATE', 'GATEW', 'GAUZ', 'GBBK', 'GBBKR', 'GBDC', 'GBIO', 'GBNY', 'GCBC', 'GCMG', 'GCMGW', 'GCT', 'GCTK', 'GDC', 'GDEN', 'GDEV', 'GDEVW', 'GDHG', 'GDRX', 'GDS', 'GDST', 'GDSTW', 'GDTC', 'GDYN', 'GECC', 'GECCI', 'GECCM', 'GECCO', 'GECCZ', 'GEG', 'GEGGL', 'GEHC', 'GEN', 'GENE', 'GENK', 'GEOS', 'GERN', 'GEVO', 'GFAI', 'GFAIW', 'GFS', 'GGAL', 'GGR', 'GGROW', 'GH', 'GHIX', 'GHIXU', 'GHRS', 'GHSI', 'GIFI', 'GIFT', 'GIGGU', 'GIGM', 'GIII', 'GILD', 'GILT', 'GIPR', 'GLAC', 'GLAD', 'GLADZ', 'GLBE', 'GLBS', 'GLBZ', 'GLDD', 'GLLI', 'GLLIU', 'GLMD', 'GLNG', 'GLPG', 'GLPI', 'GLRE', 'GLSI', 'GLST', 'GLSTU', 'GLTO', 'GLUE', 'GLYC', 'GMAB', 'GMGI', 'GMM', 'GNFT', 'GNLN', 'GNLX', 'GNPX', 'GNSS', 'GNTA', 'GNTX', 'GO', 'GOCO', 'GODN', 'GODNR', 'GOEV', 'GOEVW', 'GOGL', 'GOGO', 'GOOD', 'GOODN', 'GOODO', 'GOOG', 'GOOGL', 'GORV', 'GOSS', 'GOVX', 'GOVXW', 'GP', 'GPAT', 'GPATU', 'GPATW', 'GPCR', 'GPRE', 'GPRO', 'GRAB', 'GRABW', 'GRAL', 'GRDI', 'GRDIW', 'GREE', 'GREEL', 'GRFS', 'GRI', 'GRNQ', 'GROW', 'GRPN', 'GRRR', 'GRRRW', 'GRTS', 'GRVY', 'GRWG', 'GRYP', 'GSBC', 'GSHD', 'GSIT', 'GSIW', 'GSM', 'GSMGW', 'GSUN', 'GT', 'GTAC', 'GTBP', 'GTEC', 'GTHX', 'GTI', 'GTIM', 'GTLB', 'GTX', 'GURE', 'GUTS', 'GV', 'GVH', 'GVP', 'GWAV', 'GWRS', 'GXAI', 'GYRE', 'GYRO', 'HA', 'HAFC', 'HAIA', 'HAIAW', 'HAIN', 'HALO', 'HAO', 'HAS', 'HAYN', 'HBAN', 'HBANL', 'HBANM', 'HBANP', 'HBCP', 'HBIO', 'HBNC', 'HBT', 'HCAT', 'HCKT', 'HCM', 'HCP', 'HCSG', 'HCTI', 'HCVI', 'HCVIU', 'HCVIW', 'HCWB', 'HDL', 'HDSN', 'HEAR', 'HEES', 'HELE', 'HEPA', 'HEPS', 'HFBL', 'HFFG', 'HFWA', 'HGBL', 'HHGC', 'HHS', 'HIFS', 'HIHO', 'HIMX', 'HITI', 'HIVE', 'HKIT', 'HLIT', 'HLMN', 'HLNE', 'HLP', 'HLVX', 'HLXB', 'HMNF', 'HMST', 'HNNA', 'HNNAZ', 'HNRG', 'HNST', 'HNVR', 'HOFT', 'HOFV', 'HOLO', 'HOLOW', 'HOLX', 'HON', 'HONDU', 'HONE', 'HOOD', 'HOOK', 'HOPE', 'HOTH', 'HOUR', 'HOVNP', 'HOVR', 'HOVRW', 'HOWL', 'HPAI', 'HPAIW', 'HPCO', 'HPH', 'HPK', 'HPKEW', 'HQI', 'HQY', 'HRMY', 'HROW', 'HROWL', 'HROWM', 'HRTX', 'HRYU', 'HRZN', 'HSAI', 'HSCS', 'HSDT', 'HSIC', 'HSII', 'HSON', 'HSPO', 'HSPOR', 'HST', 'HSTM', 'HTBI', 'HTBK', 'HTCR', 'HTHT', 'HTIA', 'HTIBP', 'HTLD', 'HTLF', 'HTLFP', 'HTOO', 'HTZ', 'HTZWW', 'HUBC', 'HUBCW', 'HUBCZ', 'HUBG', 'HUDI', 'HUIZ', 'HUMA', 'HUMAW', 'HURC', 'HURN', 'HUT', 'HWBK', 'HWC', 'HWCPZ', 'HWH', 'HWKN', 'HYFM', 'HYMC', 'HYMCL', 'HYMCW', 'HYPR', 'HYZN', 'HYZNW', 'IAC', 'IART', 'IAS', 'IBAC', 'IBACR', 'IBCP', 'IBEX', 'IBKR', 'IBOC', 'IBRX', 'IBTX', 'ICAD', 'ICCC', 'ICCH', 'ICCM', 'ICCT', 'ICFI', 'ICG', 'ICHR', 'ICLK', 'ICLR', 'ICMB', 'ICON', 'ICU', 'ICUCW', 'ICUI', 'IDAI', 'IDCC', 'IDN', 'IDXX', 'IDYA', 'IEP', 'IESC', 'IFBD', 'IFRX', 'IGIC', 'IGMS', 'IGTA', 'IGTAR', 'IGTAW', 'IHRT', 'III', 'IIIV', 'IINN', 'IINNW', 'IKNA', 'IKT', 'ILAG', 'ILMN', 'ILPT', 'IMAB', 'IMCC', 'IMCR', 'IMKTA', 'IMMP', 'IMMR', 'IMMX', 'IMNM', 'IMNN', 'IMOS', 'IMPP', 'IMPPP', 'IMRN', 'IMRX', 'IMTE', 'IMTX', 'IMTXW', 'IMUX', 'IMVT', 'IMXI', 'INAB', 'INAQ', 'INBK', 'INBKZ', 'INBS', 'INBX', 'INCR', 'INCY', 'INDB', 'INDI', 'INDP', 'INDV', 'INFN', 'INGN', 'INHD', 'INKT', 'INM', 'INMB', 'INMD', 'INNV', 'INO', 'INOD', 'INSE', 'INSG', 'INSM', 'INTA', 'INTC', 'INTE', 'INTEU', 'INTEW', 'INTG', 'INTJ', 'INTR', 'INTS', 'INTU', 'INTZ', 'INVA', 'INVE', 'INVO', 'INVZ', 'INVZW', 'INZY', 'IOBT', 'IONR', 'IONS', 'IOSP', 'IOVA', 'IPA', 'IPAR', 'IPDN', 'IPGP', 'IPHA', 'IPSC', 'IPW', 'IPWR', 'IPX', 'IPXX', 'IPXXW', 'IQ', 'IRAA', 'IRAAU', 'IRBT', 'IRDM', 'IREN', 'IRIX', 'IRMD', 'IROH', 'IROHR', 'IROHU', 'IROHW', 'IRON', 'IROQ', 'IRTC', 'IRWD', 'ISPC', 'ISPO', 'ISPOW', 'ISPR', 'ISRG', 'ISRL', 'ISRLU', 'ISRLW', 'ISSC', 'ISTR', 'ITCI', 'ITI', 'ITIC', 'ITOS', 'ITRI', 'ITRM', 'ITRN', 'IVA', 'IVAC', 'IVCA', 'IVCAU', 'IVCAW', 'IVCB', 'IVCP', 'IVDA', 'IVDAW', 'IVP', 'IVVD', 'IXAQ', 'IXAQW', 'IXHL', 'IZEA', 'IZM', 'JACK', 'JAGX', 'JAKK', 'JAMF', 'JANX', 'JAZZ', 'JBDI', 'JBHT', 'JBLU', 'JBSS', 'JCSE', 'JCTCF', 'JD', 'JDZG', 'JEWL', 'JFBR', 'JFIN', 'JFU', 'JG', 'JJSF', 'JKHY', 'JL', 'JMSB', 'JNVR', 'JOUT', 'JRSH', 'JRVR', 'JSM', 'JSPR', 'JSPRW', 'JTAI', 'JTAIW', 'JTAIZ', 'JUNE', 'JVA', 'JVSA', 'JVSAU', 'JWEL', 'JXJT', 'JYD', 'JYNT', 'JZ', 'JZXN', 'KA', 'KACL', 'KALA', 'KALU', 'KALV', 'KARO', 'KAVL', 'KC', 'KDLY', 'KDLYW', 'KDP', 'KE', 'KELYA', 'KELYB', 'KEQU', 'KFFB', 'KGEI', 'KHC', 'KIDS', 'KINS', 'KIRK', 'KITT', 'KITTW', 'KLAC', 'KLIC', 'KLTR', 'KLXE', 'KMDA', 'KNDI', 'KNSA', 'KOD', 'KOPN', 'KOSS', 'KPLT', 'KPLTW', 'KPRX', 'KPTI', 'KRKR', 'KRMD', 'KRNT', 'KRNY', 'KRON', 'KROS', 'KRRO', 'KRT', 'KRUS', 'KRYS', 'KSCP', 'KSPI', 'KTCC', 'KTOS', 'KTRA', 'KTTA', 'KURA', 'KVAC', 'KVACU', 'KVACW', 'KVHI', 'KWE', 'KWESW', 'KXIN', 'KYMR', 'KYTX', 'KZIA', 'KZR', 'LAB', 'LAES', 'LAKE', 'LAMR', 'LANC', 'LAND', 'LANDM', 'LANDO', 'LANDP', 'LARK', 'LASE', 'LASR', 'LATG', 'LATGU', 'LAUR', 'LAZR', 'LBPH', 'LBRDA', 'LBRDK', 'LBRDP', 'LBTYA', 'LBTYB', 'LBTYK', 'LCFY', 'LCFYW', 'LCID', 'LCNB', 'LCUT', 'LCW', 'LDTC', 'LDTCW', 'LDWY', 'LE', 'LECO', 'LEDS', 'LEE', 'LEGH', 'LEGN', 'LENZ', 'LESL', 'LEXX', 'LEXXW', 'LFCR', 'LFLY', 'LFLYW', 'LFMD', 'LFMDP', 'LFST', 'LFUS', 'LFVN', 'LFWD', 'LGCB', 'LGCL', 'LGHL', 'LGHLW', 'LGIH', 'LGMK', 'LGND', 'LGO', 'LGVN', 'LI', 'LICN', 'LIDR', 'LIDRW', 'LIF', 'LIFW', 'LIFWW', 'LIFWZ', 'LILA', 'LILAK', 'LILM', 'LILMW', 'LIN', 'LINC', 'LIND', 'LINE', 'LINK', 'LION', 'LIPO', 'LIQT', 'LITE', 'LITM', 'LIVE', 'LIVN', 'LIXT', 'LIXTW', 'LKCO', 'LKFN', 'LKQ', 'LLYVA', 'LLYVK', 'LMAT', 'LMB', 'LMFA', 'LMNR', 'LNKB', 'LNSR', 'LNT', 'LNTH', 'LNW', 'LNZA', 'LNZAW', 'LOAN', 'LOBO', 'LOCO', 'LOGC', 'LOGI', 'LOOP', 'LOPE', 'LOT', 'LOVE', 'LPAA', 'LPAAU', 'LPAAW', 'LPCN', 'LPLA', 'LPRO', 'LPSN', 'LPTH', 'LPTX', 'LQDA', 'LQDT', 'LQR', 'LRCX', 'LRE', 'LRFC', 'LRHC', 'LRMR', 'LSAK', 'LSB', 'LSBK', 'LSBPW', 'LSCC', 'LSEA', 'LSEAW', 'LSH', 'LSTA', 'LSTR', 'LSXMA', 'LSXMB', 'LSXMK', 'LTBR', 'LTRN', 'LTRX', 'LTRY', 'LTRYW', 'LUCD', 'LUCY', 'LUCYW', 'LULU', 'LUMO', 'LUNA', 'LUNG', 'LUNR', 'LUNRW', 'LUXH', 'LUXHP', 'LVLU', 'LVO', 'LVRO', 'LVROW', 'LVTX', 'LWAY', 'LWLG', 'LX', 'LXEH', 'LXEO', 'LXRX', 'LYEL', 'LYFT', 'LYRA', 'LYT', 'LYTS', 'LZ', 'MACI', 'MACIW', 'MAMA', 'MAMO', 'MANH', 'MAPS', 'MAPSW', 'MAR', 'MARA', 'MARPS', 'MARX', 'MARXR', 'MARXU', 'MASI', 'MASS', 'MAT', 'MATH', 'MATW', 'MAXN', 'MAYS', 'MBAVU', 'MBCN', 'MBIN', 'MBINM', 'MBINN', 'MBINO', 'MBIO', 'MBLY', 'MBNKP', 'MBOT', 'MBRX', 'MBUU', 'MBWM', 'MCAA', 'MCAAW', 'MCAG', 'MCAGR', 'MCAGU', 'MCBS', 'MCFT', 'MCHP', 'MCHX', 'MCRB', 'MCRI', 'MCVT', 'MDAI', 'MDAIW', 'MDB', 'MDBH', 'MDGL', 'MDIA', 'MDJH', 'MDLZ', 'MDRR', 'MDRRP', 'MDWD', 'MDXG', 'MDXH', 'ME', 'MEDP', 'MEDS', 'MEGL', 'MEIP', 'MELI', 'MEOH', 'MERC', 'MESA', 'MESO', 'META', 'METC', 'METCB', 'METCL', 'MFH', 'MFI', 'MFIC', 'MFICL', 'MFIN', 'MGEE', 'MGIC', 'MGIH', 'MGNI', 'MGNX', 'MGOL', 'MGPI', 'MGRC', 'MGRM', 'MGRX', 'MGTX', 'MGX', 'MGYR', 'MHLD', 'MHUA', 'MICS', 'MIDD', 'MIGI', 'MIND', 'MINDP', 'MIRA', 'MIRM', 'MIST', 'MITA', 'MITAU', 'MITK', 'MKDW', 'MKDWW', 'MKSI', 'MKTW', 'MKTX', 'MLAB', 'MLCO', 'MLEC', 'MLECW', 'MLGO', 'MLKN', 'MLTX', 'MLYS', 'MMLP', 'MMSI', 'MMV', 'MMVWW', 'MMYT', 'MNDO', 'MNDR', 'MNDY', 'MNKD', 'MNMD', 'MNOV', 'MNPR', 'MNRO', 'MNSB', 'MNSBP', 'MNST', 'MNTK', 'MNTS', 'MNTSW', 'MNTX', 'MNY', 'MNYWW', 'MOB', 'MOBBW', 'MOBX', 'MODD', 'MODV', 'MOFG', 'MOGO', 'MOLN', 'MOMO', 'MOND', 'MORN', 'MOVE', 'MPAA', 'MPB', 'MPWR', 'MQ', 'MRAM', 'MRBK', 'MRCC', 'MRCY', 'MREO', 'MRIN', 'MRKR', 'MRM', 'MRNA', 'MRNO', 'MRNOW', 'MRNS', 'MRSN', 'MRTN', 'MRUS', 'MRVI', 'MRVL', 'MRX', 'MSAI', 'MSAIW', 'MSBI', 'MSBIP', 'MSEX', 'MSFT', 'MSGM', 'MSS', 'MSSA', 'MSSAR', 'MSSAW', 'MSTR', 'MTC', 'MTCH', 'MTEK', 'MTEKW', 'MTEM', 'MTEN', 'MTEX', 'MTLS', 'MTRX', 'MTSI', 'MTTR', 'MU', 'MULN', 'MURA', 'MVBF', 'MVIS', 'MVST', 'MVSTW', 'MXCT', 'MXL', 'MYFW', 'MYGN', 'MYNA', 'MYNZ', 'MYPS', 'MYPSW', 'MYRG', 'MYSZ', 'NA', 'NAAS', 'NAII', 'NAMS', 'NAMSW', 'NAOV', 'NARI', 'NATH', 'NATR', 'NAUT', 'NAVI', 'NB', 'NBBK', 'NBIX', 'NBN', 'NBST', 'NBTB', 'NBTX', 'NCI', 'NCMI', 'NCNA', 'NCNC', 'NCNO', 'NCPL', 'NCPLW', 'NCRA', 'NCSM', 'NCTY', 'NDAQ', 'NDLS', 'NDRA', 'NDSN', 'NECB', 'NEGG', 'NEO', 'NEOG', 'NEON', 'NEOV', 'NEOVW', 'NEPH', 'NERV', 'NETD', 'NETDU', 'NEWT', 'NEWTG', 'NEWTI', 'NEWTZ', 'NEXN', 'NEXT', 'NFBK', 'NFE', 'NFLX', 'NGNE', 'NHTC', 'NICE', 'NICK', 'NIOBW', 'NIPG', 'NISN', 'NITO', 'NIU', 'NIVF', 'NIVFW', 'NKGN', 'NKGNW', 'NKLA', 'NKSH', 'NKTR', 'NKTX', 'NLSP', 'NLSPW', 'NMFC', 'NMFCZ', 'NMHI', 'NMIH', 'NMRA', 'NMRK', 'NMTC', 'NN', 'NNAG', 'NNAGR', 'NNAGU', 'NNAVW', 'NNBR', 'NNDM', 'NNE', 'NNOX', 'NODK', 'NOTV', 'NOVT', 'NOVV', 'NOVVR', 'NOVVW', 'NPAB', 'NPABU', 'NPABW', 'NPCE', 'NRBO', 'NRC', 'NRDS', 'NRIM', 'NRIX', 'NRSN', 'NRSNW', 'NRXP', 'NRXPW', 'NSIT', 'NSPR', 'NSSC', 'NSTS', 'NSYS', 'NTAP', 'NTBL', 'NTCT', 'NTES', 'NTGR', 'NTIC', 'NTLA', 'NTNX', 'NTRA', 'NTRB', 'NTRBW', 'NTRP', 'NTRS', 'NTRSO', 'NTWK', 'NUKK', 'NUKKW', 'NURO', 'NUTX', 'NUVL', 'NUWE', 'NUZE', 'NVA', 'NVAC', 'NVACR', 'NVAWW', 'NVAX', 'NVCR', 'NVCT', 'NVDA', 'NVEC', 'NVEE', 'NVEI', 'NVFY', 'NVMI', 'NVNI', 'NVNIW', 'NVNO', 'NVOS', 'NVTS', 'NVVE', 'NVVEW', 'NVX', 'NWBI', 'NWE', 'NWFL', 'NWGL', 'NWL', 'NWPX', 'NWS', 'NWSA', 'NWTN', 'NWTNW', 'NXGL', 'NXGLW', 'NXL', 'NXLIW', 'NXPI', 'NXPL', 'NXPLW', 'NXST', 'NXT', 'NXTC', 'NXTT', 'NXU', 'NYAX', 'NYMT', 'NYMTI', 'NYMTL', 'NYMTM', 'NYMTN', 'NYMTZ', 'NYXH', 'OABI', 'OAKU', 'OAKUR', 'OAKUW', 'OB', 'OBIO', 'OBLG', 'OBT', 'OCC', 'OCCI', 'OCCIN', 'OCCIO', 'OCEA', 'OCEAW', 'OCFC', 'OCFCP', 'OCG', 'OCGN', 'OCS', 'OCSAW', 'OCSL', 'OCTO', 'OCUL', 'OCUP', 'OCX', 'ODD', 'ODFL', 'ODP', 'ODVWZ', 'OESX', 'OFIX', 'OFLX', 'OFS', 'OFSSH', 'OGI', 'OKTA', 'OKYO', 'OLB', 'OLED', 'OLLI', 'OLMA', 'OLPX', 'OM', 'OMAB', 'OMCL', 'OMER', 'OMEX', 'OMGA', 'OMH', 'OMIC', 'ON', 'ONB', 'ONBPO', 'ONBPP', 'ONCO', 'ONCT', 'ONCY', 'ONDS', 'ONEW', 'ONFO', 'ONFOW', 'ONMD', 'ONMDW', 'ONVO', 'ONYX', 'OP', 'OPAL', 'OPBK', 'OPCH', 'OPEN', 'OPHC', 'OPI', 'OPINL', 'OPK', 'OPOF', 'OPRA', 'OPRT', 'OPRX', 'OPT', 'OPTN', 'OPTX', 'OPTXW', 'OPXS', 'ORGN', 'ORGNW', 'ORGO', 'ORGS', 'ORIC', 'ORKA', 'ORKT', 'ORLY', 'ORMP', 'ORRF', 'OS', 'OSBC', 'OSIS', 'OSPN', 'OSS', 'OST', 'OSUR', 'OSW', 'OTEX', 'OTLK', 'OTLY', 'OTRK', 'OTTR', 'OVBC', 'OVID', 'OVLY', 'OXBR', 'OXLC', 'OXLCI', 'OXLCL', 'OXLCN', 'OXLCO', 'OXLCP', 'OXLCZ', 'OXSQ', 'OXSQG', 'OXSQZ', 'OZK', 'OZKAP', 'PAA', 'PACB', 'PAGP', 'PAHC', 'PAL', 'PALI', 'PALT', 'PANL', 'PANW', 'PARA', 'PARAA', 'PASG', 'PATK', 'PAVM', 'PAVMZ', 'PAVS', 'PAX', 'PAYO', 'PAYOW', 'PAYS', 'PAYX', 'PBBK', 'PBFS', 'PBHC', 'PBM', 'PBMWW', 'PBPB', 'PBYI', 'PCAR', 'PCB', 'PCH', 'PCRX', 'PCSA', 'PCSC', 'PCT', 'PCTTU', 'PCTTW', 'PCTY', 'PCVX', 'PCYO', 'PDCO', 'PDD', 'PDEX', 'PDFS', 'PDLB', 'PDSB', 'PDYN', 'PDYNW', 'PEBK', 'PEBO', 'PECO', 'PEGA', 'PEGY', 'PENN', 'PEP', 'PEPG', 'PERI', 'PESI', 'PET', 'PETQ', 'PETS', 'PETWW', 'PETZ', 'PEV', 'PFBC', 'PFC', 'PFG', 'PFIE', 'PFIS', 'PFMT', 'PFTA', 'PFTAU', 'PFX', 'PFXNZ', 'PGC', 'PGEN', 'PGHL', 'PGNY', 'PGY', 'PGYWW', 'PHAR', 'PHAT', 'PHIO', 'PHUN', 'PHVS', 'PI', 'PIII', 'PIIIW', 'PIK', 'PINC', 'PIRS', 'PITA', 'PITAW', 'PIXY', 'PKBK', 'PKOH', 'PLAB', 'PLAO', 'PLAOW', 'PLAY', 'PLBC', 'PLBY', 'PLCE', 'PLL', 'PLMI', 'PLMIW', 'PLMJ', 'PLMJU', 'PLMJW', 'PLMR', 'PLPC', 'PLRX', 'PLSE', 'PLTK', 'PLUG', 'PLUR', 'PLUS', 'PLXS', 'PLYA', 'PMCB', 'PMD', 'PMEC', 'PMN', 'PMTS', 'PMVP', 'PNBK', 'PNFP', 'PNFPP', 'PNRG', 'PNTG', 'POAI', 'POCI', 'PODC', 'PODD', 'POET', 'POLA', 'POOL', 'POWI', 'POWL', 'POWW', 'POWWP', 'PPBI', 'PPBT', 'PPC', 'PPIH', 'PPSI', 'PPTA', 'PPYA', 'PPYAU', 'PPYAW', 'PRAA', 'PRAX', 'PRCH', 'PRCT', 'PRDO', 'PRE', 'PRENW', 'PRFT', 'PRFX', 'PRGS', 'PRLD', 'PRLH', 'PRLHW', 'PRME', 'PROC', 'PROCW', 'PROF', 'PROK', 'PROP', 'PROV', 'PRPH', 'PRPL', 'PRPO', 'PRQR', 'PRSO', 'PRTA', 'PRTC', 'PRTG', 'PRTH', 'PRTS', 'PRVA', 'PRZO', 'PSEC', 'PSHG', 'PSIG', 'PSMT', 'PSNL', 'PSNY', 'PSNYW', 'PSTV', 'PSTX', 'PT', 'PTC', 'PTCT', 'PTEN', 'PTGX', 'PTIX', 'PTLO', 'PTMN', 'PTON', 'PTPI', 'PTSI', 'PTVE', 'PTWO', 'PTWOU', 'PTWOW', 'PUBM', 'PULM', 'PVBC', 'PWM', 'PWOD', 'PWP', 'PWUP', 'PWUPU', 'PWUPW', 'PXDT', 'PXLW', 'PXS', 'PXSAP', 'PXSAW', 'PYCR', 'PYPD', 'PYPL', 'PYXS', 'PZZA', 'QCOM', 'QCRH', 'QDEL', 'QETA', 'QFIN', 'QH', 'QIPT', 'QLGN', 'QLYS', 'QMCO', 'QMMM', 'QNCX', 'QNRX', 'QNST', 'QNTM', 'QOMO', 'QOMOW', 'QQQX', 'QRHC', 'QRTEA', 'QRTEB', 'QRTEP', 'QRVO', 'QSG', 'QSI', 'QSIAW', 'QTI', 'QTRX', 'QTTB', 'QUBT', 'QUIK', 'QURE', 'QXO', 'RAIL', 'RAND', 'RANI', 'RAPP', 'RAPT', 'RARE', 'RAVE', 'RAY', 'RAYA', 'RBB', 'RBBN', 'RBCAA', 'RBKB', 'RCAT', 'RCEL', 'RCKT', 'RCKTW', 'RCKY', 'RCM', 'RCMT', 'RCON', 'RCRT', 'RDCM', 'RDFN', 'RDHL', 'RDI', 'RDIB', 'RDNT', 'RDUS', 'RDVT', 'RDWR', 'RDZN', 'RDZNW', 'REAL', 'REAX', 'REBN', 'RECT', 'REE', 'REFI', 'REFR', 'REG', 'REGCO', 'REGCP', 'REGN', 'REKR', 'RELI', 'RELIW', 'RELL', 'RELY', 'RENB', 'RENE', 'RENEW', 'RENT', 'REPL', 'RETO', 'REVB', 'REVBW', 'REYN', 'RFAC', 'RFACU', 'RFAI', 'RFAIR', 'RFAIU', 'RFIL', 'RGC', 'RGCO', 'RGEN', 'RGF', 'RGLD', 'RGLS', 'RGNX', 'RGP', 'RGS', 'RGTI', 'RGTIW', 'RICK', 'RIGL', 'RILY', 'RILYG', 'RILYK', 'RILYL', 'RILYM', 'RILYN', 'RILYP', 'RILYT', 'RILYZ', 'RIOT', 'RITR', 'RIVN', 'RKDA', 'RKLB', 'RLAY', 'RLMD', 'RLYB', 'RMBI', 'RMBL', 'RMBS', 'RMCF', 'RMCO', 'RMCOW', 'RMNI', 'RMR', 'RMTI', 'RNA', 'RNAC', 'RNAZ', 'RNLX', 'RNW', 'RNWWW', 'RNXT', 'ROAD', 'ROCK', 'ROCL', 'ROCLW', 'ROIC', 'ROIV', 'ROKU', 'ROMA', 'ROOT', 'ROP', 'ROST', 'RPAY', 'RPD', 'RPHM', 'RPID', 'RPRX', 'RPTX', 'RR', 'RRBI', 'RRGB', 'RRR', 'RSLS', 'RSSS', 'RSVR', 'RSVRW', 'RTC', 'RUM', 'RUMBW', 'RUN', 'RUSHA', 'RUSHB', 'RVMD', 'RVMDW', 'RVNC', 'RVPH', 'RVPHW', 'RVSB', 'RVSN', 'RVYL', 'RWAY', 'RWAYL', 'RWAYZ', 'RXRX', 'RXST', 'RXT', 'RYAAY', 'RYTM', 'RZLT', 'RZLV', 'RZLVW', 'SABR', 'SABS', 'SAFT', 'SAGE', 'SAI', 'SAIA', 'SAIC', 'SAITW', 'SAMG', 'SANA', 'SANG', 'SANM', 'SANW', 'SASR', 'SATL', 'SATLW', 'SATS', 'SAVA', 'SBAC', 'SBCF', 'SBET', 'SBFG', 'SBFM', 'SBFMW', 'SBGI', 'SBLK', 'SBRA', 'SBSI', 'SBT', 'SBUX', 'SCHL', 'SCKT', 'SCLX', 'SCLXW', 'SCNI', 'SCOR', 'SCPH', 'SCSC', 'SCVL', 'SCWO', 'SCWX', 'SCYX', 'SDA', 'SDAWW', 'SDGR', 'SDIG', 'SDOT', 'SDST', 'SDSTW', 'SEAT', 'SEATW', 'SEDG', 'SEED', 'SEEL', 'SEER', 'SEIC', 'SELF', 'SELX', 'SENEA', 'SENEB', 'SERA', 'SERV', 'SEVN', 'SEZL', 'SFBC', 'SFIX', 'SFM', 'SFNC', 'SFST', 'SFWL', 'SGA', 'SGBX', 'SGC', 'SGD', 'SGH', 'SGHT', 'SGLY', 'SGMA', 'SGML', 'SGMO', 'SGMT', 'SGRP', 'SGRY', 'SHBI', 'SHC', 'SHCR', 'SHCRW', 'SHEN', 'SHFS', 'SHFSW', 'SHIM', 'SHIP', 'SHLS', 'SHLT', 'SHMD', 'SHMDW', 'SHOO', 'SHOT', 'SHOTW', 'SHPH', 'SHYF', 'SIBN', 'SIDU', 'SIEB', 'SIFY', 'SIGA', 'SIGI', 'SIGIP', 'SILC', 'SILK', 'SILO', 'SIMA', 'SIMAU', 'SIMAW', 'SIMO', 'SINT', 'SIRI', 'SISI', 'SITM', 'SJ', 'SKGR', 'SKGRW', 'SKIN', 'SKWD', 'SKYE', 'SKYT', 'SKYW', 'SKYX', 'SLAB', 'SLDB', 'SLDP', 'SLDPW', 'SLE', 'SLGL', 'SLM', 'SLMBP', 'SLN', 'SLNG', 'SLNH', 'SLNHP', 'SLNO', 'SLP', 'SLRC', 'SLRN', 'SLRX', 'SLS', 'SLXN', 'SLXNW', 'SMBC', 'SMCI', 'SMFL', 'SMID', 'SMLR', 'SMMT', 'SMPL', 'SMSI', 'SMTC', 'SMTI', 'SMTK', 'SMX', 'SMXT', 'SMXWW', 'SNAL', 'SNAX', 'SNAXW', 'SNBR', 'SNCR', 'SNCRL', 'SNCY', 'SND', 'SNDL', 'SNDX', 'SNES', 'SNEX', 'SNFCA', 'SNGX', 'SNOA', 'SNPS', 'SNPX', 'SNSE', 'SNT', 'SNTG', 'SNTI', 'SNY', 'SOBR', 'SOFI', 'SOGP', 'SOHO', 'SOHOB', 'SOHON', 'SOHOO', 'SOHU', 'SOND', 'SONDW', 'SONM', 'SONN', 'SONO', 'SOPA', 'SOPH', 'SOTK', 'SOUN', 'SOUNW', 'SOWG', 'SPAI', 'SPCB', 'SPFI', 'SPGC', 'SPI', 'SPKL', 'SPNS', 'SPOK', 'SPPL', 'SPRB', 'SPRC', 'SPRO', 'SPRY', 'SPSC', 'SPT', 'SPTN', 'SPWH', 'SQFT', 'SQFTP', 'SQFTW', 'SRAD', 'SRBK', 'SRCE', 'SRCL', 'SRDX', 'SRM', 'SRPT', 'SRRK', 'SRTS', 'SRZN', 'SRZNW', 'SSBI', 'SSBK', 'SSIC', 'SSKN', 'SSNC', 'SSP', 'SSRM', 'SSSS', 'SSSSL', 'SSTI', 'SSYS', 'STAA', 'STAF', 'STBA', 'STBX', 'STCN', 'STEC', 'STEP', 'STER', 'STGW', 'STHO', 'STI', 'STIM', 'STKH', 'STKL', 'STKS', 'STLD', 'STNE', 'STOK', 'STRA', 'STRL', 'STRM', 'STRO', 'STRR', 'STRRP', 'STRS', 'STRT', 'STSS', 'STSSW', 'STTK', 'STX', 'SUGP', 'SUNS', 'SUPN', 'SURG', 'SURGW', 'SUUN', 'SVC', 'SVCO', 'SVII', 'SVIIU', 'SVMH', 'SVMHW', 'SVRA', 'SVRE', 'SWAG', 'SWBI', 'SWIM', 'SWIN', 'SWKH', 'SWKHL', 'SWKS', 'SWTX', 'SWVL', 'SWVLW', 'SXTC', 'SXTP', 'SY', 'SYBT', 'SYBX', 'SYM', 'SYNA', 'SYPR', 'SYRA', 'SYRE', 'SYRS', 'SYT', 'SYTA', 'SYTAW', 'TACT', 'TAIT', 'TALK', 'TALKW', 'TANH', 'TAOP', 'TARA', 'TARS', 'TASK', 'TATT', 'TAYD', 'TBBK', 'TBIO', 'TBLA', 'TBLAW', 'TBLD', 'TBMC', 'TBMCR', 'TBNK', 'TBPH', 'TBRG', 'TC', 'TCBI', 'TCBIO', 'TCBK', 'TCBP', 'TCBPW', 'TCBS', 'TCBX', 'TCJH', 'TCMD', 'TCOM', 'TCPC', 'TCRT', 'TCRX', 'TCTM', 'TCX', 'TDUP', 'TEAM', 'TECH', 'TECTP', 'TECX', 'TELA', 'TELO', 'TEM', 'TENB', 'TENX', 'TER', 'TERN', 'TETE', 'TETEU', 'TFFP', 'TFIN', 'TFINP', 'TFSL', 'TGAA', 'TGL', 'TGTX', 'TH', 'THAR', 'THCH', 'THCP', 'THFF', 'THRD', 'THRM', 'THRY', 'THTX', 'TIGO', 'TIGR', 'TIL', 'TILE', 'TIPT', 'TIRX', 'TITN', 'TIVC', 'TKLF', 'TKNO', 'TLF', 'TLGY', 'TLGYU', 'TLN', 'TLPH', 'TLRY', 'TLS', 'TLSA', 'TLSI', 'TLSIW', 'TMC', 'TMCI', 'TMCWW', 'TMDX', 'TMTC', 'TMUS', 'TNDM', 'TNFA', 'TNGX', 'TNON', 'TNONW', 'TNXP', 'TNYA', 'TOI', 'TOIIW', 'TOMZ', 'TOP', 'TORO', 'TOUR', 'TOWN', 'TOYO', 'TPCS', 'TPG', 'TPGXL', 'TPIC', 'TPST', 'TRAW', 'TRDA', 'TREE', 'TRIB', 'TRIN', 'TRINI', 'TRINL', 'TRINZ', 'TRIP', 'TRMB', 'TRMD', 'TRMK', 'TRML', 'TRNR', 'TRNS', 'TROO', 'TROW', 'TRS', 'TRSG', 'TRST', 'TRUE', 'TRUG', 'TRUP', 'TRVG', 'TRVI', 'TRVN', 'TSAT', 'TSBK', 'TSBX', 'TSCO', 'TSEM', 'TSHA', 'TSLA', 'TSVT', 'TTD', 'TTEC', 'TTEK', 'TTGT', 'TTMI', 'TTNP', 'TTOO', 'TTSH', 'TTWO', 'TURB', 'TURN', 'TUSK', 'TVGN', 'TVGNW', 'TVTX', 'TW', 'TWFG', 'TWG', 'TWIN', 'TWKS', 'TWST', 'TXG', 'TXMD', 'TXN', 'TXRH', 'TYGO', 'TYRA', 'TZOO', 'UAL', 'UBCP', 'UBFO', 'UBSI', 'UBX', 'UBXG', 'UCAR', 'UCL', 'UCTT', 'UDMY', 'UEIC', 'UFCS', 'UFPI', 'UFPT', 'UG', 'UGRO', 'UHG', 'UHGWW', 'UK', 'UKOMW', 'ULBI', 'ULCC', 'ULH', 'ULTA', 'ULY', 'UMBF', 'UNB', 'UNCY', 'UNIT', 'UNTY', 'UONE', 'UONEK', 'UPBD', 'UPC', 'UPLD', 'UPST', 'UPWK', 'UPXI', 'URBN', 'URGN', 'UROY', 'USAP', 'USAU', 'USCB', 'USEA', 'USEG', 'USGO', 'USGOW', 'USIO', 'USLM', 'UTHR', 'UTMD', 'UTSI', 'UVSP', 'UXIN', 'VABK', 'VACHU', 'VALN', 'VALU', 'VANI', 'VBFC', 'VBNK', 'VBTX', 'VC', 'VCEL', 'VCIG', 'VCNX', 'VCSA', 'VCTR', 'VCYT', 'VECO', 'VEEE', 'VEON', 'VERA', 'VERB', 'VERI', 'VERO', 'VERU', 'VERV', 'VERX', 'VEV', 'VFF', 'VFS', 'VFSWW', 'VGAS', 'VGASW', 'VIASP', 'VIAV', 'VICR', 'VIGL', 'VINC', 'VINO', 'VINP', 'VIOT', 'VIR', 'VIRC', 'VIRI', 'VIRT', 'VIRX', 'VISL', 'VITL', 'VIVK', 'VKTX', 'VLCN', 'VLGEA', 'VLY', 'VLYPN', 'VLYPO', 'VLYPP', 'VMAR', 'VMCA', 'VMD', 'VMEO', 'VNDA', 'VNET', 'VNOM', 'VOD', 'VOR', 'VOXR', 'VOXX', 'VRA', 'VRAR', 'VRAX', 'VRCA', 'VRDN', 'VREX', 'VRM', 'VRME', 'VRNA', 'VRNS', 'VRNT', 'VRPX', 'VRRM', 'VRSK', 'VRSN', 'VRTX', 'VS', 'VSAC', 'VSACU', 'VSACW', 'VSAT', 'VSEC', 'VSEE', 'VSEEW', 'VSME', 'VSSYW', 'VSTA', 'VSTE', 'VSTEW', 'VSTM', 'VTGN', 'VTNR', 'VTRS', 'VTSI', 'VTVT', 'VTYX', 'VUZI', 'VVOS', 'VVPR', 'VXRT', 'VYGR', 'VYNE', 'WABC', 'WAFD', 'WAFDP', 'WAFU', 'WALD', 'WALDW', 'WASH', 'WATT', 'WAVE', 'WAVS', 'WAY', 'WB', 'WBA', 'WBD', 'WBTN', 'WBUY', 'WDAY', 'WDC', 'WDFC', 'WEN', 'WENA', 'WENAW', 'WERN', 'WEST', 'WESTW', 'WETH', 'WEYS', 'WFCF', 'WFRD', 'WGS', 'WGSWW', 'WHF', 'WHFCL', 'WHLM', 'WHLR', 'WHLRD', 'WHLRL', 'WHLRP', 'WILC', 'WIMI', 'WINA', 'WING', 'WINT', 'WINV', 'WINVR', 'WISA', 'WIX', 'WKEY', 'WKHS', 'WKME', 'WKSP', 'WLDN', 'WLDS', 'WLDSW', 'WLFC', 'WLGS', 'WMG', 'WMPN', 'WNEB', 'WNW', 'WOK', 'WOOF', 'WORX', 'WPRT', 'WRAP', 'WRLD', 'WSBC', 'WSBCP', 'WSBF', 'WSC', 'WSFS', 'WTBA', 'WTFC', 'WTFCM', 'WTFCP', 'WTMA', 'WTMAR', 'WTO', 'WTW', 'WULF', 'WVE', 'WVVI', 'WVVIP', 'WW', 'WWD', 'WYNN', 'XAIR', 'XBIO', 'XBIT', 'XBP', 'XBPEW', 'XCUR', 'XEL', 'XELA', 'XELAP', 'XELB', 'XENE', 'XERS', 'XFIN', 'XFINW', 'XFOR', 'XGN', 'XHG', 'XLO', 'XMTR', 'XNCR', 'XNET', 'XOMA', 'XOMAO', 'XOMAP', 'XOS', 'XOSWW', 'XP', 'XPEL', 'XPON', 'XRAY', 'XRTX', 'XRX', 'XTIA', 'XTKG', 'XTLB', 'XWEL', 'XXII', 'XYLO', 'YGMZ', 'YHGJ', 'YI', 'YIBO', 'YJ', 'YMAB', 'YORW', 'YOSH', 'YOTA', 'YOTAR', 'YOTAU', 'YQ', 'YTRA', 'YXT', 'YY', 'YYAI', 'YYGH', 'Z', 'ZAPP', 'ZAPPW', 'ZBAO', 'ZBRA', 'ZCAR', 'ZCARW', 'ZCMD', 'ZD', 'ZENV', 'ZEO', 'ZEUS', 'ZG', 'ZI', 'ZIMV', 'ZION', 'ZIONL', 'ZIONO', 'ZIONP', 'ZJYL', 'ZKIN', 'ZLAB', 'ZM', 'ZNTL', 'ZOOZ', 'ZOOZW', 'ZPTA', 'ZPTAW', 'ZS', 'ZTEK', 'ZUMZ', 'ZURA', 'ZVRA', 'ZVSA', 'ZYME', 'ZYXI']);
  return tickers.has(msg.toUpperCase());
}

function isSubSequence(s1, s2, m, n)
{
    
    // Base Cases
    if (m == 0)
        return true;
    if (n == 0)
        return false;
         
    // If last characters of two strings
    // are matching
    if (s1[m - 1] == s2[n - 1])
        return isSubSequence(s1, s2,
                             m - 1, n - 1);

    // If last characters are not matching
    return isSubSequence(s1, s2, m, n - 1);
}

function periodicSentence(text) {
  let output = {
    'html': '',
    'flags': Array(text.length).fill(0, 0),
    'elements': {}
  };

  let Elements = {
     'H': 'Hydrogen',     'He': 'Helium',        'Li': 'Lithium',
    'Be': 'Beryllium',     'B': 'Boron',          'C': 'Carbon',
     'N': 'Nitrogen',      'O': 'Oxygen',         'F': 'Fluorine',
    'Ne': 'Neon',         'Na': 'Sodium',        'Mg': 'Magnesium',
    'Al': 'Aluminium',    'Si': 'Silicon',        'P': 'Phosphorus',
     'S': 'Sulfur',       'Cl': 'Chlorine',      'Ar': 'Argon',
     'K': 'Potassium',    'Ca': 'Calcium',       'Sc': 'Scandium',
    'Ti': 'Titanium',      'V': 'Vanadium',      'Cr': 'Chromium',
    'Mn': 'Manganese',    'Fe': 'Iron',          'Co': 'Cobalt',
    'Ni': 'Nickel',       'Cu': 'Copper',        'Zn': 'Zinc',
    'Ga': 'Gallium',      'Ge': 'Germanium',     'As': 'Arsenic',
    'Se': 'Selenium',     'Br': 'Bromine',       'Kr': 'Krypton',
    'Rb': 'Rubidium',     'Sr': 'Strontium',      'Y': 'Yttrium',
    'Zr': 'Zirconium',    'Nb': 'Niobium',       'Mo': 'Molybdenum',
    'Tc': 'Technetium',   'Ru': 'Ruthenium',     'Rh': 'Rhodium',
    'Pd': 'Palladium',    'Ag': 'Silver',        'Cd': 'Cadmium',
    'In': 'Indium',       'Sn': 'Tin',           'Sb': 'Antimony',
    'Te': 'Tellurium',     'I': 'Iodine',        'Xe': 'Xenon',
    'Cs': 'Cesium',       'Ba': 'Barium',        'La': 'Lanthanum',
    'Ce': 'Cerium',       'Pr': 'Praseodymium',  'Nd': 'Neodymium',
    'Pm': 'Promethium',   'Sm': 'Samarium',      'Eu': 'Europium',
    'Gd': 'Gadolinium',   'Tb': 'Terbium',       'Dy': 'Dysprosium',
    'Ho': 'Holmium',      'Er': 'Erbium',        'Tm': 'Thulium',
    'Yb': 'Ytterbium',    'Lu': 'Lutetium',      'Hf': 'Hafnium',
    'Ta': 'Tantalum',      'W': 'Tungsten',      'Re': 'Rhenium',
    'Os': 'Osmium',       'Ir': 'Iridium',       'Pt': 'Platinum',
    'Au': 'Gold',         'Hg': 'Mercury',       'Tl': 'Thallium',
    'Pb': 'Lead',         'Bi': 'Bismuth',       'Po': 'Polonium',
    'At': 'Astatine',     'Rn': 'Radon',         'Fr': 'Francium',
    'Ra': 'Radium',       'Ac': 'Actinium',      'Th': 'Thorium',
    'Pa': 'Protactinium',  'U': 'Uranium',       'Np': 'Neptunium',
    'Pu': 'Plutonium',    'Am': 'Americium',     'Cm': 'Curium',
    'Bk': 'Berkelium',    'Cf': 'Californium',   'Es': 'Einsteinium',
    'Fm': 'Fermium',      'Md': 'Mendelevium',   'No': 'Nobelium',
    'Lr': 'Lawrencium',   'Rf': 'Rutherfordium', 'Db': 'Dubnium',
    'Sg': 'Seaborgium',   'Bh': 'Bohrium',       'Hs': 'Hassium',
    'Mt': 'Meitnerium',   'Ds': 'Darmstadtium',  'Rg': 'Roentgenium',
    'Cn': 'Copernicium',  'Nh': 'Nihonium',      'Fl': 'Flerovium',
    'Mc': 'Moscovium',    'Lv': 'Livermorium',   'Ts': 'Tennessine',
    'Og': 'Oganesson'
  };

  for (let x = 0, bit1, bit2; x < text.length; x++) {
    bit1 = text.substring(x, x + 1).toUpperCase();

    // If first character is not a letter, skip
    if (!bit1.match(/[A-Z]/)) continue;

    bit2 = text.substring(x + 1, x + 2).toLowerCase();

    // Check if next two letters are an element
    if (typeof Elements[bit1 + bit2] != 'undefined') {

      // If we are backtracking, the previous element letter must
      // succeed as a single letter element
      if (output['flags'][x]) {
        let bit0 = text.substring(x - 1, x).toUpperCase();
        if (typeof Elements[bit0] == 'undefined') {
          x++;
          continue;
        }
      }
      output['flags'][x] = 1;
      output['flags'][x + 1] = 2;
      x++;

    // We are currently backtracking and didn't find a match
    } else if (output['flags'][x]) {
      x++;

    // Else check if next single letter is an element
    } else if (typeof Elements[bit1] != 'undefined') {
      output['flags'][x] = 1;

    // An element was not found; if the previous symbol was a two
    // character match, backtrack to see if breaking it up will help
    } else if (x > 1 && output['flags'][x - 1] == 2) {
      x -= 2;

    }
  }

  for (let x = 0, bit1, bit2; x < text.length; x++) {
    bit1 = text.substring(x, x + 1).toUpperCase();
    bit2 = text.substring(x + 1, x + 2).toLowerCase();

    // Two character elements
    if (output['flags'][x] == 1 && x < text.length - 1 && output['flags'][x + 1] == 2) {
      output['html'] += '<span title="' + Elements[bit1 + bit2] + '">';
      output['html'] += text.substring(x, x + 2);
      output['html'] += '</span>';
      if (typeof output['elements'][bit1 + bit2] == 'undefined') {
        output['elements'][bit1 + bit2] = 1;
      } else output['elements'][bit1 + bit2]++;
      x++;

    // Single character elements
    } else if (output['flags'][x] == 1) {
      output['html'] += '<span title="' + Elements[bit1] + '">';
      output['html'] += text.substring(x, x + 1);
      output['html'] += '</span>';
      if (typeof output['elements'][bit1] == 'undefined') {
        output['elements'][bit1] = 1;
      } else output['elements'][bit1]++;

    // Non-matching letter characters
    } else if (bit1.match(/[a-zA-Z]/)) {
      output['html'] += '<del>' + text.substring(x, x + 1) + '</del>';

    // Sanitise, but otherwise ignore all other output
    } else output['html'] += text.substring(x, x + 1).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return !output['flags'].some(x => x === 0);
}

let puzzleInfo = [
  {
    puzzleId: 1337,
    name: "Undefined",
    points: 0
  }, {
    puzzleId: 1,
    name: "WHATS MY NAME?",
    points: 1,
    body: (<div><br/>Hint: Be thorough with your inputs!</div>),
    filter_fn: (msg) => {
      return isSubSequence("matt", msg.toLowerCase(), 4, msg.length)
    },
    answer: "Message must contain 'matt' as a subsequence"
  }, {
    puzzleId: 2,
    name: "Don't @ me",
    points: 1,
    body: (<div></div>),
    filter_fn: validateEmail,
    answer: "Must be a valid email"
  }, {
    puzzleId: 3,
    name: "A basic test",
    points: 2,
    body: (<div></div>),
    filter_fn: (msg) => {
      return msg.includes("a") || msg.includes("A");
    },
    answer: "Must contain the letter 'a'"
  }, {

    puzzleId: 4,
    name: "U-NICK",
    points: 2,
    body: (<div></div>),
    filter_fn: (msg) => {
      const charCount = msg.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
      }, {});
      
      const duplicates = Object.keys(charCount).filter(char => charCount[char] > 1);
      return duplicates.length === 0;
    },
    answer: "Each valid character may only be used at most once (are unique)."
  }, {
    puzzleId: 5,
    name: "2hard4you",
    points: 2,
    body: (<div><br/>Hint: Try small inputs</div>),
    filter_fn: (msg) => {
      return (Math.log(msg)/Math.log(2)) % 1 === 0;
    },
    answer: "Message must be a power of 2."
  }, {

    puzzleId: 6,
    name: "Key Bored",
    points: 3,
    body: (<div></div>),
    filter_fn: (msg) => {
      return /^(([A-Ga-g]{1})(\#|b{1})?)+$/.test(msg)
    },
    answer: "Message must be able to be written as music letter notes (Ex. A#, Cb, etc.)"
  }, {
    puzzleId: 7,
    name: "BaNaNaS",
    points: 4,
    body: (<div></div>),
    filter_fn: periodicSentence,
    answer: "Message must be able to be written using abbreviations of elements of the Periodic Table of Elements"
  }, {
    puzzleId: 8,
    name: "Search and Replace",
    points: 5,
    body: (<div><br/>Hint: Try inputting different Regexs and see what they have in common.</div>),
    filter_fn: (msg) => {
      var regex = new RegExp("^" + msg + "$");
      return regex.test("regex");
    },
    answer: "Message must be a valid Regex expression (in JS) that fully matches the word 'regex'"
  }, {
    puzzleId: 9,
    name: "Legal Name",
    points: 6,
    body: (<div><br/>Hint: Be thorough with your testing!</div>),
    filter_fn: (msg) => {
      return /^[a-zA-Z_$][\w$]*$/.test(msg)
    },
    answer: "Message must be a valid Python variable name."
  }, {
    puzzleId: 10,
    name: "TOCK TICK-OR",
    points: 7,
    body: (<div><br/>Hint: Try small inputs that are not real words.</div>),
    filter_fn: states,
    answer: "Message must be a NASDAQ stock ticker (no ETFs)"
  }, {
    puzzleId: 11,
    name: "Which rows?",
    points: 8,
    body: (<div><br/>Hint: Be thorough with your testing!</div>),
    filter_fn: (msg) => {
      let row1 = new Set("zxcvbnm,./<>?".split(""));
      let row2 = new Set(`asdfghjkl;':"'`.split(""));
      let row3 = new Set("qwertyuiop[]{}\\|".split(""));
      let row4 = new Set("1234567890!@#$%^&*()_+-=`~".split(""));

      let prevRow = 0;
      for (var i = 0; i < msg.length; i++) {
        let letter = msg[i].toLowerCase()
        let currRow = 0;
        if (row1.has(letter)) {
          currRow = 1;
        } else if (row2.has(letter)) {
          currRow = 2;
        } else if (row3.has(letter)) {
          currRow = 3;
        } else {
          currRow = 4;
        }
        if (prevRow === currRow) {
          return false;
        }
        prevRow = currRow;
      }
      return true;
    },
    answer: "The next letter in the message must come from a different row on the keyboard."
  }, {
    puzzleId: 12,
    name: "Never say Never",
    points: 9,
    body: (<div><br/>Hint: What's the name of the generative model? Now connect that to the puzzle name.</div>),
    filter_fn: rrWords,
    answer: "Message must be a word from Rickroll"
  }
];

export default puzzleInfo;