const { expect } = require('chai');
const rgbToHexColor = require('./rgb-to-hex.js');

describe('RGB Converter', () => {
    it('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF'); 
    });
    it('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it('converts red', () => {
        expect(rgbToHexColor(255, 0, 0)).to.be.equal('#FF0000');
    });
    it('returns undefined for missing param', () => {
        expect(rgbToHexColor(0,0)).to.be.undefined;
    });
    it('returns undefined for values < 0', () => {
        expect(rgbToHexColor(-1, -1 ,1)).to.be.undefined;
    });
    it('returns undefined for values out of range', () => {
        expect(rgbToHexColor(260, 260, 260)).to.be.undefined;
    });
    it('returns undefined for invalid type values', () => {
        expect(rgbToHexColor('0','0','0')).to.be.undefined;
    });
}) 