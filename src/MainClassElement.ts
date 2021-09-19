import ClassElement from "./ClassElement";

abstract class MainClassElement {
  public abstract get head(): ClassElement;
  public abstract get body(): ClassElement;
}

export default MainClassElement;
