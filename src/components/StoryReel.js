import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      {/* Story */}
      <Story
        image="https://scontent.fdac69-1.fna.fbcdn.net/v/t1.0-9/p960x960/66830619_2368112163464718_9085894132324368384_o.jpg?_nc_cat=109&_nc_sid=13bebb&_nc_eui2=AeEOuIz_eo4J-edcfVF0hRzUAO8aJk1qrU0A7xomTWqtTV3SJ43humHSuwYe8NHQ5f78DKjjlXiHlBsWgVmrTzNY&_nc_ohc=MkukKjlHctsAX8vxOS_&_nc_ht=scontent.fdac69-1.fna&tp=6&oh=e155bebefc950861a9e3a8804e3694be&oe=5F80313A"
        profileSrc="https://scontent.fdac69-1.fna.fbcdn.net/v/t31.0-0/p640x640/26685373_2025353947740543_3952980292577505346_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_eui2=AeF6l0VGfMFCFiDsd2VJmEwdcj42gkUADRVyPjaCRQANFUfiBw18738obalXn78FwOPVNYELoTPj9-9qVe1Y_hZK&_nc_ohc=2xaCgdQJqpAAX-hhBlS&_nc_ht=scontent.fdac69-1.fna&tp=6&oh=68ce561f276134b00dde173dcb62dee8&oe=5F822971"
        title="Istiak Jaman"
      />
      <Story
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        profileSrc="https://scontent.fdac69-1.fna.fbcdn.net/v/t1.0-9/83908471_107925220753284_8883404991461588992_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeHN-GISi57_zUhNszzWcZZRrwzI0uPkntqvDMjS4-Se2rvUzjEJyIFsBqbRRkassYJhsm8ACyLXZOpJ-K18iw3B&_nc_ohc=eoxjwzLGWp8AX9V4KNF&_nc_ht=scontent.fdac69-1.fna&oh=4f6385bcea01dab88e90a0698555437c&oe=5F828047"
        title="Nazia Hasnain"
      />
      <Story
        image="https://scontent.fdac69-1.fna.fbcdn.net/v/t1.0-9/s960x960/37488554_2070620776600216_2160400744962850816_o.jpg?_nc_cat=108&_nc_sid=7aed08&_nc_eui2=AeHV3vSaSmyUQtsxS6z75omJzxf-LY81Sd3PF_4tjzVJ3a6AZH_1iN3ICOhkyh10z0m_l9JcuSDPTX90HreJL_co&_nc_ohc=anVdwGnodeEAX9Vjt9n&_nc_ht=scontent.fdac69-1.fna&tp=7&oh=8ada77bffa8c3204cd5f4ed45b328a51&oe=5F832045"
        profileSrc="https://scontent.fdac69-1.fna.fbcdn.net/v/t1.0-9/86703283_2474699659525657_9202939159440785408_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_eui2=AeEOv1BrahU2pj4KnAh8vafvHjB0NSqRa84eMHQ1KpFrzhuMnk50HEzLyW8s5e5JIFgJlBWJAgwSJ2CbPBzNCKGM&_nc_ohc=GG8C-8j-S2cAX9eV02G&_nc_ht=scontent.fdac69-1.fna&oh=c156c8fe1992e055ec4256fd7973d7a4&oe=5F82B345"
        title="Sajib Paul"
      />
      <Story
        image="https://scontent.fdac69-1.fna.fbcdn.net/v/t1.0-9/s960x960/42543825_2157710424472118_7709715486027546624_o.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_eui2=AeHuibKf-AHAWZRF7N6EP5ZWsTA3603W202xMDfrTdbbTQ7RZWJ3DIP8wmrzZuVPv9YosFL8npHRdriNIGUwTxs-&_nc_ohc=GmgtrfX9O3wAX-JvCC7&_nc_ht=scontent.fdac69-1.fna&tp=7&oh=96085c678068f628a16a222e678451ff&oe=5F8195BA"
        profileSrc="https://scontent.fdac69-1.fna.fbcdn.net/v/t1.0-9/s960x960/83772182_2502587603317730_1300301559317397504_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_eui2=AeFhWcsZ-tvW_DcPuU6SIQ8fj_7p3Rz1JP-P_undHPUk_xsMTggsDN5uD3E0aIdVssiISkUctNvwTVgJRmGfecBa&_nc_ohc=iTOTyJdk0nMAX9xbOAB&_nc_ht=scontent.fdac69-1.fna&tp=7&oh=ec395a1426c5a1f4278233cb9f4d722a&oe=5F83D602"
        title="Sajal Debnath"
      />
      <Story
        image="https://scontent.fdac69-1.fna.fbcdn.net/v/t1.0-9/p960x960/40067183_1832404776853764_3226070113505509376_o.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_eui2=AeGXYovxBS7Uwjeza2rxHVLzcyeQUDMYgiZzJ5BQMxiCJnXH5pRX0Su1cMfH2E9A7VUmFMZLswJ-_HVgsWZcxts3&_nc_ohc=QxMbKjBTpFMAX8X4vlp&_nc_ht=scontent.fdac69-1.fna&tp=6&oh=f62db68f844a42e501fdfc50186dfbb1&oe=5F83F97D"
        profileSrc="https://scontent.fdac69-1.fna.fbcdn.net/v/t31.0-8/s960x960/18278374_1331894090238171_6176689524136540985_o.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_eui2=AeEqQC6GdnNiEZDBMmAWRqgX03DIQ2BjXBvTcMhDYGNcGx3KKTNDI5Ci0kVgP_r8fcDHqGkUiMsJsT-1B9Ep9k1e&_nc_ohc=B3nAnmrE99QAX_dFtrN&_nc_ht=scontent.fdac69-1.fna&tp=7&oh=f54281c6a245a5102bcffbabf93df568&oe=5F806F10"
        title="S.M Akmol"
      />
    </div>
  );
}

export default StoryReel;
