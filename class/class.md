Class:-
        Class is a very useable method to create objects it is add in js in ES6 this is a new method to create the objects.Inside it we pass the function but here only name of function is defined not write the function.Like in normal objects function present similarly we can add function in it.
        Syntax:-
                class obj_name{
                    constructor(parameters){
                        //Adding values in objects
                        this.key_name = parameter;
                    }   
                }
                const name_variable = new obj_name("add values in it as a argument which are stores in the objects")
                
        Here constructor is the function in which all those values are come you want to add in the objects.

Class provides some amazing things which help us for write the code in less lines.
(1).extend:-
            extend is used to use the another class properties in another class.
            Syntax:-
                    Class B extend ClassA

(2).super:-
            super is used inside the second class where extend used super is used to get the values of the class A which you want.But when we are using constructor inside the class B the parameter of the class A are written and in super these all parameters are written which are written in the constructor of the classB.
            Syntax:-
                Combined syntax of use of extend nd then get the value of the class a using super
                class extend classA{
                    constructor(classA-parameters,parameters){
                        super(classA-parameters);
                        this.key_name = classA-parameter
                    }
                }

(3).static:-
            Static is used to make some thing inside the class rare to use it and not give access to all time some time we can use it.

(4).instanceOf:-
            instanceof is used to check if an object is an instance of a class (or constructor function).
            🔍 In easy words:
            It checks:
            “Was this object created using this class or constructor?”