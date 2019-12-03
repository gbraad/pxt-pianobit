//% color="#17ecc1" weight=20 icon="\uf001"
namespace pianobit {

    export enum touch {
        //% blockId="None" block="None"
        None = 0x0000,
        //% blockId="C" block="C"
        C = 0x0004,
        //% blockId="CSharp" block="C#"
        CSharp = 0x0008,
        //% blockId="D" block="D"
        D = 0x0010,
        //% blockId="DSharp" block="D#"
        DSharp = 0x0020,
        //% blockId="E" block="E"
        E = 0x0040,
        //% blockId="F" block="F"
        F = 0x0080,
        //% blockId="FSharp" block="F#"
        FSharp = 0x0100,
        //% blockId="G" block="G"
        G = 0x0200,
        //% blockId="GSharp" block="G#"
        GSharp = 0x0400,
        //% blockId="A" block="A"
        A = 0x0800,
        //% blockId="ASharp" block="A#"
        ASharp = 0x1000,
        //% blockId="B" block="B"
        B = 0x2000,
        //% blockId="L" block="L"
        L = 0x0002,
        //% blockId="M" block="M"
        M = 0x0001,
        //% blockId="H" block="H"
        H = 0x4000,

    }

    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(addr, buf);
    }

    /**
     * *****************************************************************
     * @param index
     */

    //% blockId=piano_Touch block="Music Touch return"
    //% weight=97
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Touch(): number {
        let a = 0;
        let b = 0;
        let c = 0;
        pins.i2cWriteNumber(0x50, 8, NumberFormat.UInt8BE, false);
        a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, true);
        b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        c = (b << 8) | a;
        return c;
    }

    //% blockId=piano_TouchButton block="Music Button|%value"
    //% weight=96
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function TouchButton(value: touch): number {
        let c = value;
        return c;
    }

    //% blockId=piano_PlayPiano block="Play Piano|tone %value"
    //% weight=95
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function PlayPiano(value: number): void {
        let a = 0;
        let b = 0;
        let c = 0;
        let temp = 0;
        pins.i2cWriteNumber(0x50, 8, NumberFormat.UInt8BE, false);
        a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, true);
        b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        c = (b << 8) | a;

        if (value == 1) {
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & touch.C) {
                music.ringTone(131);
            } else if (c & touch.CSharp) {
                music.ringTone(139);
            } else if (c & touch.D) {
                music.ringTone(147);
            } else if (c & touch.DSharp) {
                music.ringTone(156);
            } else if (c & touch.E) {
                music.ringTone(165);
            } else if (c & touch.F) {
                music.ringTone(175);
            } else if (c & touch.FSharp) {
                music.ringTone(185);
            } else if (c & touch.G) {
                music.ringTone(196);
            } else if (c & touch.GSharp) {
                music.ringTone(208);
            } else if (c & touch.A) {
                music.ringTone(220);
            } else if (c & touch.ASharp) {
                music.ringTone(233);
            } else if (c & touch.B) {
                music.ringTone(247);
            } else if (c == touch.None) {
                //music.ringTone(0);
                pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
        else if (value == 2) {
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & touch.C) {
                music.ringTone(262);
            } else if (c & touch.CSharp) {
                music.ringTone(277);
            } else if (c & touch.D) {
                music.ringTone(294);
            } else if (c & touch.DSharp) {
                music.ringTone(311);
            } else if (c & touch.E) {
                music.ringTone(330);
            } else if (c & touch.F) {
                music.ringTone(349);
            } else if (c & touch.FSharp) {
                music.ringTone(370);
            } else if (c & touch.G) {
                music.ringTone(392);
            } else if (c & touch.GSharp) {
                music.ringTone(415);
            } else if (c & touch.A) {
                music.ringTone(440);
            } else if (c & touch.ASharp) {
                music.ringTone(466);
            } else if (c & touch.B) {
                music.ringTone(494);
            } else if (c == touch.None) {
                //music.ringTone(0);
                pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
        else if (value == 3) {
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & touch.C) {
                music.ringTone(523);
            } else if (c & touch.CSharp) {
                music.ringTone(554);
            } else if (c & touch.D) {
                music.ringTone(587);
            } else if (c & touch.DSharp) {
                music.ringTone(622);
            } else if (c & touch.E) {
                music.ringTone(659);
            } else if (c & touch.F) {
                music.ringTone(698);
            } else if (c & touch.FSharp) {
                music.ringTone(740);
            } else if (c & touch.G) {
                music.ringTone(784);
            } else if (c & touch.GSharp) {
                music.ringTone(831);
            } else if (c & touch.A) {
                music.ringTone(880);
            } else if (c & touch.ASharp) {
                music.ringTone(932);
            } else if (c & touch.B) {
                music.ringTone(988);
            } else if (c == touch.None) {
                //music.ringTone(0);
                pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }

    }
}
