import Pie, { ProvidedProps, PieArcDatum } from "@visx/shape/lib/shapes/Pie";
import { scaleOrdinal } from "@visx/scale";
import { Group } from "@visx/group";
import { GradientPinkBlue } from "@visx/gradient";
import letterFrequency, {
  LetterFrequency,
} from "@visx/mock-data/lib/mocks/letterFrequency";
import browserUsage, {
  BrowserUsage as Browsers,
} from "@visx/mock-data/lib/mocks/browserUsage";
import { animated, useTransition, interpolate } from "@react-spring/web";

export default {
  Pie,
  ProvidedProps,
  PieArcDatum,
  scaleOrdinal,
  Group,
  GradientPinkBlue,
  letterFrequency,
  LetterFrequency,
  browserUsage,
  Browsers,
  animated,
  useTransition,
  interpolate,
};
