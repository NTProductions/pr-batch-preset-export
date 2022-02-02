main("C:/Users/Natel/Videos");

function main(folderPath) {
    var sequences = app.project.sequences;
    
    var vanillaSequence, qeSequence;
    var exportPath;
    for(var s = 0; s < sequences.numSequences; s++) {
        vanillaSequence = sequences[s];
        exportPath = folderPath + "/" + sequences[s].name;
        
        // export proj
        vanillaSequence.exportAsProject(exportPath.replace(/\//g, "\\")+".prproj");
        
        app.project.openSequence(sequences[s].sequenceID);
        qeSequence = qe.project.getActiveSequence();
        
        // export thumbnail
        qeSequence.exportFramePNG(0, exportPath.replace(/\//g, "\\"));
        
        // export preview video
        app.encoder.encodeSequence(sequences[s], folderPath+"/"+sequences[s].name+".mp4", "C:\\Users\\Natel\\Documents\\Adobe\\Adobe Media Encoder\\15.0\\Presets\\Premiere FX Export.epr", 1, 0);
        }
    }