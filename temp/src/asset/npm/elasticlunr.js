(function(){var elasticlunr=function(config){var idx=new elasticlunr.Index;idx.pipeline.add(elasticlunr.trimmer,elasticlunr.stopWordFilter,elasticlunr.stemmer);if(config)config.call(idx,idx);return idx};elasticlunr.version="0.9.5";lunr=elasticlunr;elasticlunr.utils={};elasticlunr.utils.warn=function(global){return function(message){if(global.console&&console.warn){console.warn(message)}}}(this);elasticlunr.utils.toString=function(obj){if(obj===void 0||obj===null){return""}return obj.toString()};elasticlunr.EventEmitter=function(){this.events={}};elasticlunr.EventEmitter.prototype.addListener=function(){var args=Array.prototype.slice.call(arguments),fn=args.pop(),names=args;if(typeof fn!=="function")throw new TypeError("last argument must be a function");names.forEach(function(name){if(!this.hasHandler(name))this.events[name]=[];this.events[name].push(fn)},this)};elasticlunr.EventEmitter.prototype.removeListener=function(name,fn){if(!this.hasHandler(name))return;var fnIndex=this.events[name].indexOf(fn);if(fnIndex===-1)return;this.events[name].splice(fnIndex,1);if(this.events[name].length==0)delete this.events[name]};elasticlunr.EventEmitter.prototype.emit=function(name){if(!this.hasHandler(name))return;var args=Array.prototype.slice.call(arguments,1);this.events[name].forEach(function(fn){fn.apply(undefined,args)},this)};elasticlunr.EventEmitter.prototype.hasHandler=function(name){return name in this.events};elasticlunr.tokenizer=function(str){if(!arguments.length||str===null||str===undefined)return[];if(Array.isArray(str)){var arr=str.filter(function(token){if(token===null||token===undefined){return false}return true});arr=arr.map(function(t){return elasticlunr.utils.toString(t).toLowerCase()});var out=[];arr.forEach(function(item){var tokens=item.split(elasticlunr.tokenizer.seperator);out=out.concat(tokens)},this);return out}return str.toString().trim().toLowerCase().split(elasticlunr.tokenizer.seperator)};elasticlunr.tokenizer.defaultSeperator=/[\s\-]+/;elasticlunr.tokenizer.seperator=elasticlunr.tokenizer.defaultSeperator;elasticlunr.tokenizer.setSeperator=function(sep){if(sep!==null&&sep!==undefined&&typeof sep==="object"){elasticlunr.tokenizer.seperator=sep}};elasticlunr.tokenizer.resetSeperator=function(){elasticlunr.tokenizer.seperator=elasticlunr.tokenizer.defaultSeperator};elasticlunr.tokenizer.getSeperator=function(){return elasticlunr.tokenizer.seperator};elasticlunr.Pipeline=function(){this._queue=[]};elasticlunr.Pipeline.registeredFunctions={};elasticlunr.Pipeline.registerFunction=function(fn,label){if(label in elasticlunr.Pipeline.registeredFunctions){elasticlunr.utils.warn("Overwriting existing registered function: "+label)}fn.label=label;elasticlunr.Pipeline.registeredFunctions[label]=fn};elasticlunr.Pipeline.getRegisteredFunction=function(label){if(label in elasticlunr.Pipeline.registeredFunctions!==true){return null}return elasticlunr.Pipeline.registeredFunctions[label]};elasticlunr.Pipeline.warnIfFunctionNotRegistered=function(fn){var isRegistered=fn.label&&fn.label in this.registeredFunctions;if(!isRegistered){elasticlunr.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",fn)}};elasticlunr.Pipeline.load=function(serialised){var pipeline=new elasticlunr.Pipeline;serialised.forEach(function(fnName){var fn=elasticlunr.Pipeline.getRegisteredFunction(fnName);if(fn){pipeline.add(fn)}else{throw new Error("Cannot load un-registered function: "+fnName)}});return pipeline};elasticlunr.Pipeline.prototype.add=function(){var fns=Array.prototype.slice.call(arguments);fns.forEach(function(fn){elasticlunr.Pipeline.warnIfFunctionNotRegistered(fn);this._queue.push(fn)},this)};elasticlunr.Pipeline.prototype.after=function(existingFn,newFn){elasticlunr.Pipeline.warnIfFunctionNotRegistered(newFn);var pos=this._queue.indexOf(existingFn);if(pos===-1){throw new Error("Cannot find existingFn")}this._queue.splice(pos+1,0,newFn)};elasticlunr.Pipeline.prototype.before=function(existingFn,newFn){elasticlunr.Pipeline.warnIfFunctionNotRegistered(newFn);var pos=this._queue.indexOf(existingFn);if(pos===-1){throw new Error("Cannot find existingFn")}this._queue.splice(pos,0,newFn)};elasticlunr.Pipeline.prototype.remove=function(fn){var pos=this._queue.indexOf(fn);if(pos===-1){return}this._queue.splice(pos,1)};elasticlunr.Pipeline.prototype.run=function(tokens){var out=[],tokenLength=tokens.length,pipelineLength=this._queue.length;for(var i=0;i<tokenLength;i++){var token=tokens[i];for(var j=0;j<pipelineLength;j++){token=this._queue[j](token,i,tokens);if(token===void 0||token===null)break}if(token!==void 0&&token!==null)out.push(token)}return out};elasticlunr.Pipeline.prototype.reset=function(){this._queue=[]};elasticlunr.Pipeline.prototype.get=function(){return this._queue};elasticlunr.Pipeline.prototype.toJSON=function(){return this._queue.map(function(fn){elasticlunr.Pipeline.warnIfFunctionNotRegistered(fn);return fn.label})};elasticlunr.Index=function(){this._fields=[];this._ref="id";this.pipeline=new elasticlunr.Pipeline;this.documentStore=new elasticlunr.DocumentStore;this.index={};this.eventEmitter=new elasticlunr.EventEmitter;this._idfCache={};this.on("add","remove","update",function(){this._idfCache={}}.bind(this))};elasticlunr.Index.prototype.on=function(){var args=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,args)};elasticlunr.Index.prototype.off=function(name,fn){return this.eventEmitter.removeListener(name,fn)};elasticlunr.Index.load=function(serialisedData){if(serialisedData.version!==elasticlunr.version){elasticlunr.utils.warn("version mismatch: current "+elasticlunr.version+" importing "+serialisedData.version)}var idx=new this;idx._fields=serialisedData.fields;idx._ref=serialisedData.ref;idx.documentStore=elasticlunr.DocumentStore.load(serialisedData.documentStore);idx.pipeline=elasticlunr.Pipeline.load(serialisedData.pipeline);idx.index={};for(var field in serialisedData.index){idx.index[field]=elasticlunr.InvertedIndex.load(serialisedData.index[field])}return idx};elasticlunr.Index.prototype.addField=function(fieldName){this._fields.push(fieldName);this.index[fieldName]=new elasticlunr.InvertedIndex;return this};elasticlunr.Index.prototype.setRef=function(refName){this._ref=refName;return this};elasticlunr.Index.prototype.saveDocument=function(save){this.documentStore=new elasticlunr.DocumentStore(save);return this};elasticlunr.Index.prototype.addDoc=function(doc,emitEvent){if(!doc)return;var emitEvent=emitEvent===undefined?true:emitEvent;var docRef=doc[this._ref];this.documentStore.addDoc(docRef,doc);this._fields.forEach(function(field){var fieldTokens=this.pipeline.run(elasticlunr.tokenizer(doc[field]));this.documentStore.addFieldLength(docRef,field,fieldTokens.length);var tokenCount={};fieldTokens.forEach(function(token){if(token in tokenCount)tokenCount[token]+=1;else tokenCount[token]=1},this);for(var token in tokenCount){var termFrequency=tokenCount[token];termFrequency=Math.sqrt(termFrequency);this.index[field].addToken(token,{ref:docRef,tf:termFrequency})}},this);if(emitEvent)this.eventEmitter.emit("add",doc,this)};elasticlunr.Index.prototype.removeDocByRef=function(docRef,emitEvent){if(!docRef)return;if(this.documentStore.isDocStored()===false){return}if(!this.documentStore.hasDoc(docRef))return;var doc=this.documentStore.getDoc(docRef);this.removeDoc(doc,false)};elasticlunr.Index.prototype.removeDoc=function(doc,emitEvent){if(!doc)return;var emitEvent=emitEvent===undefined?true:emitEvent;var docRef=doc[this._ref];if(!this.documentStore.hasDoc(docRef))return;this.documentStore.removeDoc(docRef);this._fields.forEach(function(field){var fieldTokens=this.pipeline.run(elasticlunr.tokenizer(doc[field]));fieldTokens.forEach(function(token){this.index[field].removeToken(token,docRef)},this)},this);if(emitEvent)this.eventEmitter.emit("remove",doc,this)};elasticlunr.Index.prototype.updateDoc=function(doc,emitEvent){var emitEvent=emitEvent===undefined?true:emitEvent;this.removeDocByRef(doc[this._ref],false);this.addDoc(doc,false);if(emitEvent)this.eventEmitter.emit("update",doc,this)};elasticlunr.Index.prototype.idf=function(term,field){var cacheKey="@"+field+"/"+term;if(Object.prototype.hasOwnProperty.call(this._idfCache,cacheKey))return this._idfCache[cacheKey];var df=this.index[field].getDocFreq(term);var idf=1+Math.log(this.documentStore.length/(df+1));this._idfCache[cacheKey]=idf;return idf};elasticlunr.Index.prototype.getFields=function(){return this._fields.slice()};elasticlunr.Index.prototype.search=function(query,userConfig){if(!query)return[];var configStr=null;if(userConfig!=null){configStr=JSON.stringify(userConfig)}var config=new elasticlunr.Configuration(configStr,this.getFields()).get();var queryTokens=this.pipeline.run(elasticlunr.tokenizer(query));var queryResults={};for(var field in config){var fieldSearchResults=this.fieldSearch(queryTokens,field,config);var fieldBoost=config[field].boost;for(var docRef in fieldSearchResults){fieldSearchResults[docRef]=fieldSearchResults[docRef]*fieldBoost}for(var docRef in fieldSearchResults){if(docRef in queryResults){queryResults[docRef]+=fieldSearchResults[docRef]}else{queryResults[docRef]=fieldSearchResults[docRef]}}}var results=[];for(var docRef in queryResults){results.push({ref:docRef,score:queryResults[docRef]})}results.sort(function(a,b){return b.score-a.score});return results};elasticlunr.Index.prototype.fieldSearch=function(queryTokens,fieldName,config){var booleanType=config[fieldName].bool;var expand=config[fieldName].expand;var boost=config[fieldName].boost;var scores=null;var docTokens={};if(boost===0){return}queryTokens.forEach(function(token){var tokens=[token];if(expand==true){tokens=this.index[fieldName].expandToken(token)}var queryTokenScores={};tokens.forEach(function(key){var docs=this.index[fieldName].getDocs(key);var idf=this.idf(key,fieldName);if(scores&&booleanType=="AND"){var filteredDocs={};for(var docRef in scores){if(docRef in docs){filteredDocs[docRef]=docs[docRef]}}docs=filteredDocs}if(key==token){this.fieldSearchStats(docTokens,key,docs)}for(var docRef in docs){var tf=this.index[fieldName].getTermFrequency(key,docRef);var fieldLength=this.documentStore.getFieldLength(docRef,fieldName);var fieldLengthNorm=1;if(fieldLength!=0){fieldLengthNorm=1/Math.sqrt(fieldLength)}var penality=1;if(key!=token){penality=(1-(key.length-token.length)/key.length)*.15}var score=tf*idf*fieldLengthNorm*penality;if(docRef in queryTokenScores){queryTokenScores[docRef]+=score}else{queryTokenScores[docRef]=score}}},this);scores=this.mergeScores(scores,queryTokenScores,booleanType)},this);scores=this.coordNorm(scores,docTokens,queryTokens.length);return scores};elasticlunr.Index.prototype.mergeScores=function(accumScores,scores,op){if(!accumScores){return scores}if(op=="AND"){var intersection={};for(var docRef in scores){if(docRef in accumScores){intersection[docRef]=accumScores[docRef]+scores[docRef]}}return intersection}else{for(var docRef in scores){if(docRef in accumScores){accumScores[docRef]+=scores[docRef]}else{accumScores[docRef]=scores[docRef]}}return accumScores}};elasticlunr.Index.prototype.fieldSearchStats=function(docTokens,token,docs){for(var doc in docs){if(doc in docTokens){docTokens[doc].push(token)}else{docTokens[doc]=[token]}}};elasticlunr.Index.prototype.coordNorm=function(scores,docTokens,n){for(var doc in scores){if(!(doc in docTokens))continue;var tokens=docTokens[doc].length;scores[doc]=scores[doc]*tokens/n}return scores};elasticlunr.Index.prototype.toJSON=function(){var indexJson={};this._fields.forEach(function(field){indexJson[field]=this.index[field].toJSON()},this);return{version:elasticlunr.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),index:indexJson,pipeline:this.pipeline.toJSON()}};elasticlunr.Index.prototype.use=function(plugin){var args=Array.prototype.slice.call(arguments,1);args.unshift(this);plugin.apply(this,args)};elasticlunr.DocumentStore=function(save){if(save===null||save===undefined){this._save=true}else{this._save=save}this.docs={};this.docInfo={};this.length=0};elasticlunr.DocumentStore.load=function(serialisedData){var store=new this;store.length=serialisedData.length;store.docs=serialisedData.docs;store.docInfo=serialisedData.docInfo;store._save=serialisedData.save;return store};elasticlunr.DocumentStore.prototype.isDocStored=function(){return this._save};elasticlunr.DocumentStore.prototype.addDoc=function(docRef,doc){if(!this.hasDoc(docRef))this.length++;if(this._save===true){this.docs[docRef]=clone(doc)}else{this.docs[docRef]=null}};elasticlunr.DocumentStore.prototype.getDoc=function(docRef){if(this.hasDoc(docRef)===false)return null;return this.docs[docRef]};elasticlunr.DocumentStore.prototype.hasDoc=function(docRef){return docRef in this.docs};elasticlunr.DocumentStore.prototype.removeDoc=function(docRef){if(!this.hasDoc(docRef))return;delete this.docs[docRef];delete this.docInfo[docRef];this.length--};elasticlunr.DocumentStore.prototype.addFieldLength=function(docRef,fieldName,length){if(docRef===null||docRef===undefined)return;if(this.hasDoc(docRef)==false)return;if(!this.docInfo[docRef])this.docInfo[docRef]={};this.docInfo[docRef][fieldName]=length};elasticlunr.DocumentStore.prototype.updateFieldLength=function(docRef,fieldName,length){if(docRef===null||docRef===undefined)return;if(this.hasDoc(docRef)==false)return;this.addFieldLength(docRef,fieldName,length)};elasticlunr.DocumentStore.prototype.getFieldLength=function(docRef,fieldName){if(docRef===null||docRef===undefined)return 0;if(!(docRef in this.docs))return 0;if(!(fieldName in this.docInfo[docRef]))return 0;return this.docInfo[docRef][fieldName]};elasticlunr.DocumentStore.prototype.toJSON=function(){return{docs:this.docs,docInfo:this.docInfo,length:this.length,save:this._save}};function clone(obj){if(null===obj||"object"!==typeof obj)return obj;var copy=obj.constructor();for(var attr in obj){if(obj.hasOwnProperty(attr))copy[attr]=obj[attr]}return copy}elasticlunr.stemmer=function(){var step2list={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},step3list={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},c="[^aeiou]",v="[aeiouy]",C=c+"[^aeiouy]*",V=v+"[aeiou]*",mgr0="^("+C+")?"+V+C,meq1="^("+C+")?"+V+C+"("+V+")?$",mgr1="^("+C+")?"+V+C+V+C,s_v="^("+C+")?"+v;var re_mgr0=new RegExp(mgr0);var re_mgr1=new RegExp(mgr1);var re_meq1=new RegExp(meq1);var re_s_v=new RegExp(s_v);var re_1a=/^(.+?)(ss|i)es$/;var re2_1a=/^(.+?)([^s])s$/;var re_1b=/^(.+?)eed$/;var re2_1b=/^(.+?)(ed|ing)$/;var re_1b_2=/.$/;var re2_1b_2=/(at|bl|iz)$/;var re3_1b_2=new RegExp("([^aeiouylsz])\\1$");var re4_1b_2=new RegExp("^"+C+v+"[^aeiouwxy]$");var re_1c=/^(.+?[^aeiou])y$/;var re_2=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;var re_3=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;var re_4=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;var re2_4=/^(.+?)(s|t)(ion)$/;var re_5=/^(.+?)e$/;var re_5_1=/ll$/;var re3_5=new RegExp("^"+C+v+"[^aeiouwxy]$");var porterStemmer=function porterStemmer(w){var stem,suffix,firstch,re,re2,re3,re4;if(w.length<3){return w}firstch=w.substr(0,1);if(firstch=="y"){w=firstch.toUpperCase()+w.substr(1)}re=re_1a;re2=re2_1a;if(re.test(w)){w=w.replace(re,"$1$2")}else if(re2.test(w)){w=w.replace(re2,"$1$2")}re=re_1b;re2=re2_1b;if(re.test(w)){var fp=re.exec(w);re=re_mgr0;if(re.test(fp[1])){re=re_1b_2;w=w.replace(re,"")}}else if(re2.test(w)){var fp=re2.exec(w);stem=fp[1];re2=re_s_v;if(re2.test(stem)){w=stem;re2=re2_1b_2;re3=re3_1b_2;re4=re4_1b_2;if(re2.test(w)){w=w+"e"}else if(re3.test(w)){re=re_1b_2;w=w.replace(re,"")}else if(re4.test(w)){w=w+"e"}}}re=re_1c;if(re.test(w)){var fp=re.exec(w);stem=fp[1];w=stem+"i"}re=re_2;if(re.test(w)){var fp=re.exec(w);stem=fp[1];suffix=fp[2];re=re_mgr0;if(re.test(stem)){w=stem+step2list[suffix]}}re=re_3;if(re.test(w)){var fp=re.exec(w);stem=fp[1];suffix=fp[2];re=re_mgr0;if(re.test(stem)){w=stem+step3list[suffix]}}re=re_4;re2=re2_4;if(re.test(w)){var fp=re.exec(w);stem=fp[1];re=re_mgr1;if(re.test(stem)){w=stem}}else if(re2.test(w)){var fp=re2.exec(w);stem=fp[1]+fp[2];re2=re_mgr1;if(re2.test(stem)){w=stem}}re=re_5;if(re.test(w)){var fp=re.exec(w);stem=fp[1];re=re_mgr1;re2=re_meq1;re3=re3_5;if(re.test(stem)||re2.test(stem)&&!re3.test(stem)){w=stem}}re=re_5_1;re2=re_mgr1;if(re.test(w)&&re2.test(w)){re=re_1b_2;w=w.replace(re,"")}if(firstch=="y"){w=firstch.toLowerCase()+w.substr(1)}return w};return porterStemmer}();elasticlunr.Pipeline.registerFunction(elasticlunr.stemmer,"stemmer");elasticlunr.stopWordFilter=function(token){if(token&&elasticlunr.stopWordFilter.stopWords[token]!==true){return token}};elasticlunr.clearStopWords=function(){elasticlunr.stopWordFilter.stopWords={}};elasticlunr.addStopWords=function(words){if(words==null||Array.isArray(words)===false)return;words.forEach(function(word){elasticlunr.stopWordFilter.stopWords[word]=true},this)};elasticlunr.resetStopWords=function(){elasticlunr.stopWordFilter.stopWords=elasticlunr.defaultStopWords};elasticlunr.defaultStopWords={"":true,a:true,able:true,about:true,across:true,after:true,all:true,almost:true,also:true,am:true,among:true,an:true,and:true,any:true,are:true,as:true,at:true,be:true,because:true,been:true,but:true,by:true,can:true,cannot:true,could:true,dear:true,did:true,do:true,does:true,either:true,else:true,ever:true,every:true,for:true,from:true,get:true,got:true,had:true,has:true,have:true,he:true,her:true,hers:true,him:true,his:true,how:true,however:true,i:true,if:true,in:true,into:true,is:true,it:true,its:true,just:true,least:true,let:true,like:true,likely:true,may:true,me:true,might:true,most:true,must:true,my:true,neither:true,no:true,nor:true,not:true,of:true,off:true,often:true,on:true,only:true,or:true,other:true,our:true,own:true,rather:true,said:true,say:true,says:true,she:true,should:true,since:true,so:true,some:true,than:true,that:true,the:true,their:true,them:true,then:true,there:true,these:true,they:true,this:true,tis:true,to:true,too:true,twas:true,us:true,wants:true,was:true,we:true,were:true,what:true,when:true,where:true,which:true,while:true,who:true,whom:true,why:true,will:true,with:true,would:true,yet:true,you:true,your:true};elasticlunr.stopWordFilter.stopWords=elasticlunr.defaultStopWords;elasticlunr.Pipeline.registerFunction(elasticlunr.stopWordFilter,"stopWordFilter");elasticlunr.trimmer=function(token){if(token===null||token===undefined){throw new Error("token should not be undefined")}return token.replace(/^\W+/,"").replace(/\W+$/,"")};elasticlunr.Pipeline.registerFunction(elasticlunr.trimmer,"trimmer");elasticlunr.InvertedIndex=function(){this.root={docs:{},df:0}};elasticlunr.InvertedIndex.load=function(serialisedData){var idx=new this;idx.root=serialisedData.root;return idx};elasticlunr.InvertedIndex.prototype.addToken=function(token,tokenInfo,root){var root=root||this.root,idx=0;while(idx<=token.length-1){var key=token[idx];if(!(key in root))root[key]={docs:{},df:0};idx+=1;root=root[key]}var docRef=tokenInfo.ref;if(!root.docs[docRef]){root.docs[docRef]={tf:tokenInfo.tf};root.df+=1}else{root.docs[docRef]={tf:tokenInfo.tf}}};elasticlunr.InvertedIndex.prototype.hasToken=function(token){if(!token)return false;var node=this.root;for(var i=0;i<token.length;i++){if(!node[token[i]])return false;node=node[token[i]]}return true};elasticlunr.InvertedIndex.prototype.getNode=function(token){if(!token)return null;var node=this.root;for(var i=0;i<token.length;i++){if(!node[token[i]])return null;node=node[token[i]]}return node};elasticlunr.InvertedIndex.prototype.getDocs=function(token){var node=this.getNode(token);if(node==null){return{}}return node.docs};elasticlunr.InvertedIndex.prototype.getTermFrequency=function(token,docRef){var node=this.getNode(token);if(node==null){return 0}if(!(docRef in node.docs)){return 0}return node.docs[docRef].tf};elasticlunr.InvertedIndex.prototype.getDocFreq=function(token){var node=this.getNode(token);if(node==null){return 0}return node.df};elasticlunr.InvertedIndex.prototype.removeToken=function(token,ref){if(!token)return;var node=this.getNode(token);if(node==null)return;if(ref in node.docs){delete node.docs[ref];node.df-=1}};elasticlunr.InvertedIndex.prototype.expandToken=function(token,memo,root){if(token==null||token=="")return[];var memo=memo||[];if(root==void 0){root=this.getNode(token);if(root==null)return memo}if(root.df>0)memo.push(token);for(var key in root){if(key==="docs")continue;if(key==="df")continue;this.expandToken(token+key,memo,root[key])}return memo};elasticlunr.InvertedIndex.prototype.toJSON=function(){return{root:this.root}};elasticlunr.Configuration=function(config,fields){var config=config||"";if(fields==undefined||fields==null){throw new Error("fields should not be null")}this.config={};var userConfig;try{userConfig=JSON.parse(config);this.buildUserConfig(userConfig,fields)}catch(error){elasticlunr.utils.warn("user configuration parse failed, will use default configuration");this.buildDefaultConfig(fields)}};elasticlunr.Configuration.prototype.buildDefaultConfig=function(fields){this.reset();fields.forEach(function(field){this.config[field]={boost:1,bool:"OR",expand:false}},this)};elasticlunr.Configuration.prototype.buildUserConfig=function(config,fields){var global_bool="OR";var global_expand=false;this.reset();if("bool"in config){global_bool=config["bool"]||global_bool}if("expand"in config){global_expand=config["expand"]||global_expand}if("fields"in config){for(var field in config["fields"]){if(fields.indexOf(field)>-1){var field_config=config["fields"][field];var field_expand=global_expand;if(field_config.expand!=undefined){field_expand=field_config.expand}this.config[field]={boost:field_config.boost||field_config.boost===0?field_config.boost:1,bool:field_config.bool||global_bool,expand:field_expand}}else{elasticlunr.utils.warn("field name in user configuration not found in index instance fields")}}}else{this.addAllFields2UserConfig(global_bool,global_expand,fields)}};elasticlunr.Configuration.prototype.addAllFields2UserConfig=function(bool,expand,fields){fields.forEach(function(field){this.config[field]={boost:1,bool:bool,expand:expand}},this)};elasticlunr.Configuration.prototype.get=function(){return this.config};elasticlunr.Configuration.prototype.reset=function(){this.config={}};lunr.SortedSet=function(){this.length=0;this.elements=[]};lunr.SortedSet.load=function(serialisedData){var set=new this;set.elements=serialisedData;set.length=serialisedData.length;return set};lunr.SortedSet.prototype.add=function(){var i,element;for(i=0;i<arguments.length;i++){element=arguments[i];if(~this.indexOf(element))continue;this.elements.splice(this.locationFor(element),0,element)}this.length=this.elements.length};lunr.SortedSet.prototype.toArray=function(){return this.elements.slice()};lunr.SortedSet.prototype.map=function(fn,ctx){return this.elements.map(fn,ctx)};lunr.SortedSet.prototype.forEach=function(fn,ctx){return this.elements.forEach(fn,ctx)};lunr.SortedSet.prototype.indexOf=function(elem){var start=0,end=this.elements.length,sectionLength=end-start,pivot=start+Math.floor(sectionLength/2),pivotElem=this.elements[pivot];while(sectionLength>1){if(pivotElem===elem)return pivot;if(pivotElem<elem)start=pivot;if(pivotElem>elem)end=pivot;sectionLength=end-start;pivot=start+Math.floor(sectionLength/2);pivotElem=this.elements[pivot]}if(pivotElem===elem)return pivot;return-1};lunr.SortedSet.prototype.locationFor=function(elem){var start=0,end=this.elements.length,sectionLength=end-start,pivot=start+Math.floor(sectionLength/2),pivotElem=this.elements[pivot];while(sectionLength>1){if(pivotElem<elem)start=pivot;if(pivotElem>elem)end=pivot;sectionLength=end-start;pivot=start+Math.floor(sectionLength/2);pivotElem=this.elements[pivot]}if(pivotElem>elem)return pivot;if(pivotElem<elem)return pivot+1};lunr.SortedSet.prototype.intersect=function(otherSet){var intersectSet=new lunr.SortedSet,i=0,j=0,a_len=this.length,b_len=otherSet.length,a=this.elements,b=otherSet.elements;while(true){if(i>a_len-1||j>b_len-1)break;if(a[i]===b[j]){intersectSet.add(a[i]);i++,j++;continue}if(a[i]<b[j]){i++;continue}if(a[i]>b[j]){j++;continue}}return intersectSet};lunr.SortedSet.prototype.clone=function(){var clone=new lunr.SortedSet;clone.elements=this.toArray();clone.length=clone.elements.length;return clone};lunr.SortedSet.prototype.union=function(otherSet){var longSet,shortSet,unionSet;if(this.length>=otherSet.length){longSet=this,shortSet=otherSet}else{longSet=otherSet,shortSet=this}unionSet=longSet.clone();for(var i=0,shortSetElements=shortSet.toArray();i<shortSetElements.length;i++){unionSet.add(shortSetElements[i])}return unionSet};lunr.SortedSet.prototype.toJSON=function(){return this.toArray()};(function(root,factory){if(typeof define==="function"&&define.amd){define(factory)}else if(typeof exports==="object"){module.exports=factory()}else{root.elasticlunr=factory()}})(this,function(){return elasticlunr})})();
