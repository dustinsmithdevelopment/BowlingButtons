import {Component} from "horizon/core";
import {Pressable, Text, UIComponent, UINode, View} from "horizon/ui";

const BACKGROUND_COLOR = "#ffffff";


class BowlingButtons extends UIComponent<typeof BowlingButtons> {
  panelHeight = 200;
  panelWidth = 500;
  static propsDefinition = {};
  initializeUI(): UINode {
    return View({
      children: [
          View({children: [
              Pressable({children: [Text({text: "Start"})]}),
            ]}),
          View({children: [
              Pressable({children: [Text({text: "Reset"})]}),
              Pressable({children: [Text({text: "Ball Glitched"})]})
            ],style:{display:"flex",flexDirection:"column",justifyContent:"center"}}),
          View({children: [
              Pressable({children: [Text({text: "Join"})]}),
              Pressable({children: [Text({text: "Skip Turn"})]})
            ],style:{display:"flex",flexDirection:"column",justifyContent:"center"}})
      ], style: {backgroundColor: BACKGROUND_COLOR, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%'}
    })
  }

  start() {
    
  }
}
Component.register(BowlingButtons);