/**
 * UltraBox JSON から 伸ばし音が切れない正確な MIDI ファイルを生成するコンバーター
 * * 依存ライブラリ: midi-writer-js (v3.1.1) 埋め込み
 */

// ===================================================================================
// 1. 埋め込みライブラリ: midi-writer-js v3.1.1 (Minified)
// ===================================================================================
var MidiWriter=function(){var a=Object.create(null);function b(b){var c=a[b];if(void 0!==c)return c;var d=a[b]={exports:{}};return b(d.exports,d),d.exports}return b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},b.d=function(a,b){for(var c in b)b.hasOwnProperty(c)&&!a.hasOwnProperty(c)&&Object.defineProperty(a,c,{enumerable:!0,get:b[c]})},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(2).default}({2:function(a,b,c){c.r(b);var d={pitch:null,duration:"4",wait:null,sequential:!1,velocity:50,channel:null},e=function(a){this.tickDuration=a||128,this.events=[]};e.prototype.addEvent=function(a,b){var c;a instanceof Array?c=a:a.events?c=a.events:c=[a];var d=this,e=function(){if(b){var a=b(d,c);a&&a.sequential&&d.setSequential(c)}d.events=d.events.concat(c)};return d.events.length>0?d.events[d.events.length-1].duration?e():e():e(),this},e.prototype.setInstrument=function(a){return this.addEvent(new n(a)),this},e.prototype.addNote=function(a){var b=this;a instanceof Array?a.forEach(function(a){b.addEvent(new g(a))}):b.addEvent(new g(a))},e.prototype.addTrackName=function(a){return this.addEvent(new k({text:a})),this},e.prototype.addCopyright=function(a){return this.addEvent(new l({text:a})),this},e.prototype.addText=function(a){return this.addEvent(new m({text:a})),this},e.prototype.addMarker=function(a){return this.addEvent(new o({text:a})),this},e.prototype.addCuePoint=function(a){return this.addEvent(new p({text:a})),this},e.prototype.addTempo=function(a){return this.addEvent(new j({bpm:a})),this},e.prototype.setChannel=function(a){return this.addEvent(new h({channel:a})),this},e.prototype.setPitchBend=function(a){return this.addEvent(new r({msb:a})),this},e.prototype.setModulation=function(a){return this.addEvent(new q({msb:a})),this},e.prototype.setPan=function(a){return this.addEvent(new s({msb:a})),this},e.prototype.setVolume=function(a){return this.addEvent(new t({msb:a})),this},e.prototype.setTickDuration=function(a){this.tickDuration=a},e.prototype.setSequential=function(a){var b=0;return a.forEach(function(c){c.wait=0,c.duration&&(c.wait=b),b=c.duration}),this};var f=function(){this.tracks=[],this.type=0,this.ticksPerBeat=128};f.prototype.addTrack=function(a){return this.tracks.push(a),this},f.prototype.buildFile=function(){for(var a=this.ticksPerBeat,b=this.tracks,c=[],d=0;d<b.length;d++){var e=new u(a,b[d].events,d,b[d].tickDuration);c=c.concat(e.toArray())}var f=new v(c,this.type,a);return f.build()};var g=function(a){this.id=function(){return"NoteEvent"},this.events=this.get=[].concat(a.pitch).map(function(b){return new w(Object.assign({},d,a,{pitch:b}))})};g.prototype.set=function(a){return this.events.forEach(function(b){b.set(a)}),this};var h=function(a){this.id=function(){return"ChannelEvent"},this.events=[new x(a)]};h.prototype.set=function(a){this.events[0].set(a)};var i=function(a){this.id=function(){return"ControlChangeEvent"},this.events=[new y(a)]};i.prototype.set=function(a){this.events[0].set(a)};var j=function(a){this.id=function(){return"TempoEvent"},this.events=[new z(a)]};j.prototype.set=function(a){this.events[0].set(a)};var k=function(a){this.id=function(){return"TrackNameEvent"},this.events=[new A(a)]};k.prototype.set=function(a){this.events[0].set(a)};var l=function(a){this.id=function(){return"CopyrightEvent"},this.events=[new B(a)]};l.prototype.set=function(a){this.events[0].set(a)};var m=function(a){this.id=function(){return"TextEvent"},this.events=[new C(a)]};m.prototype.set=function(a){this.events[0].set(a)};var n=function(a){this.id=function(){return"ProgramChangeEvent"},this.events=[new D(a)]};n.prototype.set=function(a){this.events[0].set(a)};var o=function(a){this.id=function(){return"MarkerEvent"},this.events=[new E(a)]};o.prototype.set=function(a){this.events[0].set(a)};var p=function(a){this.id=function(){return"CuePointEvent"},this.events=[new F(a)]};p.prototype.set=function(a){this.events[0].set(a)};var q=function(a){this.id=function(){return"ModulationEvent"},this.events=[new G(a)]};q.prototype.set=function(a){this.events[0].set(a)};var r=function(a){this.id=function(){return"PitchBendEvent"},this.events=[new H(a)]};r.prototype.set=function(a){this.events[0].set(a)};var s=function(a){this.id=function(){return"PanEvent"},this.events=[new I(a)]};s.prototype.set=function(a){this.events[0].set(a)};var t=function(a){this.id=function(){return"VolumeEvent"},this.events=[new J(a)]};t.prototype.set=function(a){this.events[0].set(a)};var u=function(a,b,c,d){this.tickDuration=d||128,this.ticksPerBeat=a||128,this.events=b,this.channel=c,this.tickMap={whole:this.ticksPerBeat*4,half:this.ticksPerBeat*2,quarter:this.ticksPerBeat,8:this.ticksPerBeat/2,16:this.ticksPerBeat/4,32:this.ticksPerBeat/8,64:this.ticksPerBeat/16,128:this.ticksPerBeat/32}};u.prototype.toArray=function(){var a=this,b=a.events,c=[];a.setEventTicks(b);var d=0;return b.forEach(function(b){if(b.tick>0)c=c.concat(a.getDelta(b.tick));else{var e=b.getEvent();}c=c.concat(e),d+=b.tick}),c.concat([255,47,0])};u.prototype.setEventTicks=function(a){var b=this;a.forEach(function(a){var c=a.wait,d=a.duration;if(a.duration="string"==typeof d?b.tickMap[d.replace(/[^\w]/g,"")]||b.tickMap[d]:d,a.tick=a.duration,a.wait){var e="string"==typeof c?b.tickMap[c.replace(/[^\w]/g,"")]||b.tickMap[c]:c;a.tick=e}var f=a.getEvent;a.getEvent=function(){var b=f();return a.channel?(b[0]=b[0]|a.channel-1):b[0],b}})};u.prototype.getDelta=function(a){var b,c=[];if(a=Math.round(a),0===a)return[0];do{b=127&a,a>>=7,a>0&&(b|=128),c.push(b)}while(a>0);return c.reverse()};var v=function(a,b,c){this.tracks=a,this.type=b||0,this.ticksPerBeat=c||128};v.prototype.build=function(){var a=[77,84,104,100,0,0,0,6,0,this.type,0,this.tracks.length,this.ticksPerBeat>>8,255&this.ticksPerBeat];return this.tracks.forEach(function(b){a=a.concat([77,84,114,107,b.length>>24&255,b.length>>16&255,b.length>>8&255,255&b.length]),a=a.concat(b)}),new Uint8Array(a)};var w=function(a){this.set(a),this.noteOff,this.noteOn},x=function(a){this.set(a),this.getEvent=function(){return[176,32,this.msb]}},y=function(a){this.set(a),this.getEvent=function(){return[176,this.controller,this.msb]}},z=function(a){this.set(a),this.getEvent=function(){var b=6e4/this.bpm,c=[255,81,3,b>>16&255,b>>8&255,255&b];return c}};var A=function(a){this.set(a),this.getEvent=function(){return[255,3,this.text.length].concat(this.text.split("").map(function(a){return a.charCodeAt()}))}},B=function(a){this.set(a),this.getEvent=function(){return[255,2,this.text.length].concat(this.text.split("").map(function(a){return a.charCodeAt()}))}},C=function(a){this.set(a),this.getEvent=function(){return[255,1,this.text.length].concat(this.text.split("").map(function(a){return a.charCodeAt()}))}},D=function(a){this.set(a),this.getEvent=function(){return[192,this.instrument]}},E=function(a){this.set(a),this.getEvent=function(){return[255,6,this.text.length].concat(this.text.split("").map(function(a){return a.charCodeAt()}))}},F=function(a){this.set(a),this.getEvent=function(){return[255,7,this.text.length].concat(this.text.split("").map(function(a){return a.charCodeAt()}))}},G=function(a){this.set(a),this.getEvent=function(){return[176,1,this.msb]}},H=function(a){this.set(a),this.getEvent=function(){return[224,this.lsb,this.msb]}},I=function(a){this.set(a),this.getEvent=function(){return[176,10,this.msb]}},J=function(a){this.set(a),this.getEvent=function(){return[176,7,this.msb]}},K=function(a){var b=a.id();"NoteEvent"===b&&(this.noteOff=new L({pitch:a.pitch,duration:a.duration,velocity:0})),"NoteEvent"===b&&(this.noteOn=new M({pitch:a.pitch,velocity:a.velocity,duration:a.wait}));var c=this;Object.keys(a).forEach(function(b){c[b]=a[b]})};K.prototype.getEvent=function(){return this.noteOff?[].concat(this.noteOn.getEvent(),this.noteOff.getEvent()):this.noteOn?this.noteOn.getEvent():[]},K.prototype.set=function(a){var b=this;Object.keys(a).forEach(function(c){"pitch"===c?b[c]=MidiWriter.Utils.toNoteNumber(a[c]):b[c]=a[c]})};var L=function(a){this.set(a),this.getEvent=function(){return[128,this.pitch,this.velocity]}};L.prototype.set=K.prototype.set;var M=function(a){this.set(a),this.getEvent=function(){return[144,this.pitch,this.velocity]}};M.prototype.set=K.prototype.set;var N=function(){this.transpose=function(a,b){return b.forEach(function(c){var d=c.pitch;c.pitch=MidiWriter.Utils.toNoteNumber(d)+a})},this.toNoteNumber=function(a){return"string"==typeof a?MidiWriter.Utils.noteNameToNoteNumber(a):a},this.noteNameToNoteNumber=function(a){var b=a.match(/([a-gA-G])(#|b)?([0-9\-])/);if(!b)return null;var c=b[1].toUpperCase(),d=b[2]||"",e=parseInt(b[3],10),f=0;switch(c){case"C":f=0;break;case"D":f=2;break;case"E":f=4;break;case"F":f=5;break;case"G":f=7;break;case"A":f=9;break;case"B":f=11}switch(d){case"#":f+=1;break;case"b":f-=1}return 12*(e+1)+f}};Object.assign(K.prototype,{set:K.prototype.set,tick:0,channel:0,pitch:60,velocity:50,duration:128,wait:0}),Object.assign(w.prototype,K.prototype,{getEvent:K.prototype.getEvent,set:K.prototype.set,noteOff:L.prototype,noteOn:M.prototype}),Object.assign(L.prototype,{getEvent:L.prototype.getEvent,set:L.prototype.set,pitch:60,velocity:50}),Object.assign(M.prototype,{getEvent:M.prototype.getEvent,set:M.prototype.set,pitch:60,velocity:50}),Object.assign(x.prototype,K.prototype,{getEvent:x.prototype.getEvent,set:K.prototype.set,msb:0}),Object.assign(y.prototype,K.prototype,{getEvent:y.prototype.getEvent,set:K.prototype.set,controller:0,msb:0}),Object.assign(z.prototype,K.prototype,{getEvent:z.prototype.getEvent,set:K.prototype.set,bpm:120}),Object.assign(A.prototype,K.prototype,{getEvent:A.prototype.getEvent,set:K.prototype.set,text:""}),Object.assign(B.prototype,K.prototype,{getEvent:B.prototype.getEvent,set:K.prototype.set,text:""}),Object.assign(C.prototype,K.prototype,{getEvent:C.prototype.getEvent,set:K.prototype.set,text:""}),Object.assign(D.prototype,K.prototype,{getEvent:D.prototype.getEvent,set:K.prototype.set,instrument:0}),Object.assign(E.prototype,K.prototype,{getEvent:E.prototype.getEvent,set:K.prototype.set,text:""}),Object.assign(F.prototype,K.prototype,{getEvent:F.prototype.getEvent,set:K.prototype.set,text:""}),Object.assign(G.prototype,K.prototype,{getEvent:G.prototype.getEvent,set:K.prototype.set,msb:0}),Object.assign(H.prototype,K.prototype,{getEvent:H.prototype.getEvent,set:K.prototype.set,lsb:0,msb:64}),Object.assign(I.prototype,K.prototype,{getEvent:I.prototype.getEvent,set:K.prototype.set,msb:64}),Object.assign(J.prototype,K.prototype,{getEvent:J.prototype.getEvent,set:K.prototype.set,msb:100});var O={Writer:f,Track:e,NoteEvent:g,ProgramChangeEvent:n,NoteOnEvent:M,NoteOffEvent:L,ChannelEvent:x,ControlChangeEvent:i,TempoEvent:z,TrackNameEvent:A,CopyrightEvent:B,TextEvent:C,MarkerEvent:E,CuePointEvent:F,PitchBendEvent:H,ModulationEvent:G,PanEvent:I,VolumeEvent:J,Utils:new N};b.default=O}}).default;

// ===================================================================================
// 2. UltraBox JSON解析とMIDI変換のロジック (変更なし)
// ===================================================================================

function generateMidi(data) {
    const writer = new MidiWriter.Writer();
    
    const { 
        beatsPerMinute: bpm, 
        ticksPerBeat, 
        loopBars, 
        beatsPerBar, 
        channels, 
        patterns 
    } = data;
    
    if (!bpm || !ticksPerBeat || !loopBars || !beatsPerBar || !channels || !patterns) {
        throw new Error("JSONに必要な基本設定が不足しています。");
    }

    channels.forEach((channel, channelIndex) => {
        if (channel.type !== "pitch" && channel.type !== "drum") return;
        
        const track = new MidiWriter.Track();
        track.setTempo(bpm);
        
        let midiChannel = channelIndex + 1;
        if (channel.type === "drum") {
            midiChannel = 10;
        }
        track.setChannel(midiChannel);

        if (channel.name) {
             track.addTrackName(channel.name);
        }

        if (channel.type === "pitch") {
            const gmInstrument = (channelIndex % 127) + 1;
            track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: gmInstrument }));
        }

        const volume = channel.instruments[0] ? Math.max(1, Math.min(127, Math.round(channel.instruments[0].volume * 1.27))) : 100;
        track.addEvent(new MidiWriter.ControlChangeEvent({ controller: 7, value: volume }));

        const trackEvents = [];
        let currentBarStartTick = 0;
        const barLengthTicks = beatsPerBar * ticksPerBeat;
        
        for (let barIndex = 0; barIndex < loopBars; barIndex++) {
            const patternIndex = channel.sequence[barIndex];
            
            const patternData = patterns[patternIndex];
            if (!patternData || !patternData.notes || patternData.notes.length === 0) {
                currentBarStartTick += barLengthTicks;
                continue;
            }

            patternData.notes.forEach(note => {
                const noteStartTick = currentBarStartTick + note.start;
                const durationTicks = note.duration;
                const velocity = note.volume ? Math.max(1, Math.min(127, Math.round(note.volume * 1.27))) : 100;
                
                note.pitches.forEach(pitch => {
                    trackEvents.push({
                        type: 'on',
                        tick: noteStartTick,
                        pitch: pitch,
                        velocity: velocity
                    });
                    trackEvents.push({
                        type: 'off',
                        tick: noteStartTick + durationTicks,
                        pitch: pitch
                    });
                });
            });
            
            currentBarStartTick += barLengthTicks;
        }
        
        trackEvents.sort((a, b) => a.tick - b.tick);

        let lastTick = 0;
        trackEvents.forEach(event => {
            const deltaTime = event.tick - lastTick;
            
            if (deltaTime < 0) return; 

            if (event.type === 'on') {
                track.addEvent(new MidiWriter.NoteOnEvent({
                    pitch: [event.pitch], 
                    velocity: event.velocity, 
                    duration: 'T' + deltaTime
                }));
            } else if (event.type === 'off') {
                track.addEvent(new MidiWriter.NoteOffEvent({
                    pitch: [event.pitch], 
                    duration: 'T' + deltaTime
                }));
            }
            
            lastTick = event.tick;
        });
        
        writer.addTrack(track);
    });

    return writer.buildArrayBuffer();
}

function downloadMidi(arrayBuffer, fileName) {
    const blob = new Blob([arrayBuffer], { type: 'audio/midi' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}_fixed.mid`;
    
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ===================================================================================
// 4. HTML DOM操作とメインエントリポイント (エラー報告をさらに強化)
// ===================================================================================

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('jsonFile');
    const convertButton = document.getElementById('convertButton');
    const messageArea = document.getElementById('messageArea');

    let ultraBoxData = null;

    function showMessage(text, type) {
        if (!messageArea) return;
        messageArea.textContent = text;
        messageArea.className = `message ${type}`;
        messageArea.style.display = 'block';
    }
    
    if (fileInput && convertButton) {
        fileInput.addEventListener('change', (e) => {
            showMessage('', 'none');
            convertButton.disabled = true;
            const file = e.target.files[0];
            
            if (!file) {
                showMessage('⚠️ ファイルが選択されていません。', 'error');
                return;
            }

            // ファイル選択直後のフィードバックを即座に表示
            showMessage(`🔍 ファイル [${file.name}] の読み込みプロセスを開始しました...`, 'success'); 

            const reader = new FileReader();
            
            // --- 成功時の処理 ---
            reader.onload = (event) => {
                try {
                    const jsonText = event.target.result;
                    ultraBoxData = JSON.parse(jsonText);
                    
                    if (ultraBoxData && (ultraBoxData.format === "UltraBox" || ultraBoxData.format === "BeepBox")) {
                        convertButton.disabled = false;
                        showMessage(`✅ 「${file.name}」の読み込みに成功しました。変換ボタンを押してください。`, 'success');
                    } else {
                        const formatValue = ultraBoxData && ultraBoxData.format !== undefined ? ultraBoxData.format : "(未定義)";
                        throw new Error(`ファイル形式がUltraBox/BeepBoxではありません。検出された format: ${formatValue}`);
                    }
                } catch (error) {
                    const errorMessage = `❌ ファイル解析失敗: ${error.message}`;
                    showMessage(errorMessage, 'error');
                    ultraBoxData = null;
                }
            };
            
            // --- 読み込み失敗時の処理 (重要: ブラウザ固有の低レベルエラーをキャッチ) ---
            reader.onerror = (error) => {
                 const errorMessage = `🔥 低レベル読み込みエラー: コード ${error.target.error.code}。ファイルが壊れているか、アクセス権限に問題がある可能性があります。`;
                 showMessage(errorMessage, 'error');
                 ultraBoxData = null;
            }

            // --- 読み込み開始 ---
            try {
                reader.readAsText(file);
            } catch(err) {
                 showMessage(`❌ readAsTextの呼び出し中に例外が発生: ${err.message}`, 'error');
            }
        });

        convertButton.addEventListener('click', () => {
            if (ultraBoxData) {
                convertButton.disabled = true;
                showMessage('🔄 変換中です...', 'success');
                
                setTimeout(() => {
                    try {
                        const midiArrayBuffer = generateMidi(ultraBoxData);
                        downloadMidi(midiArrayBuffer, ultraBoxData.name || "untitled");
                        showMessage('🎉 MIDIファイルの生成とダウンロードを開始しました！', 'success');
                    } catch (error) {
                        showMessage(`💥 変換中にエラーが発生しました: ${error.message}`, 'error');
                        console.error(error);
                    } finally {
                        convertButton.disabled = false;
                    }
                }, 10);
            }
        });
    } else {
        showMessage("🚨 致命的エラー: HTML要素（入力欄やボタン）が見つかりません。index.htmlを確認してください。", 'error');
    }
});
