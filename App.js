import {
  LotsOfStyles,
  FixedDimensionsBasics,
  FlexDimensionsBasics,
  PercentageDimensionsBasics,
  FlexBasic,
  FlexDirectionBasics,
  JustifyContentBasics,
  AlignItemsLayout,
  WidthHeightBasics,
  PositionLayout,
  DisplayAnImageWithStyle,
  NativeBaseBasic,
  GlueStackUIBasic,
} from "./screens";

// Array of Object Declaration
const pageArr = [
  { name: "Lots Of Styles", comp: <LotsOfStyles /> },
  { name: "Fixed Dimensions Basics", comp: <FixedDimensionsBasics /> },
  { name: "Flex Dimensions Basics", comp: <FlexDimensionsBasics /> },
  {
    name: "Percentage Dimensions Basics",
    comp: <PercentageDimensionsBasics />,
  },
  { name: "Flex Basic", comp: <FlexBasic /> },
  { name: "Flex Direction Basics", comp: <FlexDirectionBasics /> },
  { name: "Justify Content Basics", comp: <JustifyContentBasics /> },
  { name: "Align Items Layout", comp: <AlignItemsLayout /> },
  { name: "Width Height Basics", comp: <WidthHeightBasics /> },
  { name: "Position Layout", comp: <PositionLayout /> },
  { name: "Display An Image With Style", comp: <DisplayAnImageWithStyle /> },
  { name: "Native Base Basic", comp: <NativeBaseBasic /> },
  { name: "Gluestack UI Basic", comp: <GlueStackUIBasic /> },
];
