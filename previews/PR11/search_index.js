var documenterSearchIndex = {"docs":
[{"location":"about/#Authors","page":"About","title":"Authors","text":"","category":"section"},{"location":"about/","page":"About","title":"About","text":"The following authors collaborated in various tasks including: design, development and testing of the code.","category":"page"},{"location":"about/","page":"About","title":"About","text":"Jorge M. Pérez Zerpa [1], leaded and managed the design and development of the code, developed the assembly functions, nonlinear truss element formulation, nonlinear static analysis function, designed and co-authored Newmark's method function, input and output functions, leaded the generation of the documentation.\nJ. Bruno Bazzano[1], [2], leaded the development of the nonlinear/linear buckling analysis modules, co-designed the code, developed and implemented validation examples, validated the HHT implementation.\nJoaquín Viera [1], leaded the development of the Linear Analysis module and input files, collaborated in the design and development of the input reading and output generation modules, leaded the development of GUI.\nMauricio Vanzulli [4] co-developed the Newmark's method functions and scripts, developed input files for the dynamic analysis examples.\nMarcelo Forets[6] developed the Neo-Hookean solid model.","category":"page"},{"location":"about/","page":"About","title":"About","text":"The following authors contributed by :","category":"page"},{"location":"about/","page":"About","title":"About","text":"Jean-Marc Battini[3], contributed functions associated with the computation of static internal forces of the nonlinear frame element.\nSebastian Toro[5], provided the functions: fLectDxf.m, fValGrCode.m and f_XData.m, used in the dxf import function.","category":"page"},{"location":"about/","page":"About","title":"About","text":"[1]: Instituto de Estructuras y Transporte, Facultad de Ingeniería, Universidad de la República, Montevideo, Uruguay","category":"page"},{"location":"about/","page":"About","title":"About","text":"[2]: Bazzano & Scelza Ingenieros, Montevideo, Uruguay","category":"page"},{"location":"about/","page":"About","title":"About","text":"[3]: Department of Civil and Architectural Engineering, KTH Royal Institute of Technology, Stockholm, Sweden","category":"page"},{"location":"about/","page":"About","title":"About","text":"[4]: Instituto de Ingeniería Mecánica y Producción Industrial, Facultad de Ingeniería, Universidad de la República, Montevideo, Uruguay.","category":"page"},{"location":"about/","page":"About","title":"About","text":"[5]: CIMEC Santa Fe, Argentina","category":"page"},{"location":"about/","page":"About","title":"About","text":"[6]: Centro Universitario Regional Este, Universidad de la República, Maldonado, Uruguay","category":"page"},{"location":"about/#Contributions-and-Acknowledgments","page":"About","title":"Contributions and Acknowledgments","text":"","category":"section"},{"location":"about/","page":"About","title":"About","text":"The functions in linearStiffMatPlate3D.m and assemblyUniform.m use part of the femplateexample.m code developed by Jorge Pérez Zerpa and Pablo Castrillo.","category":"page"},{"location":"about/","page":"About","title":"About","text":"J. M. Pérez Zerpa would like to thank: Pablo Blanco  from the hemolab.lncc.br group at LNCC Brazil,  Gonzalo Ares from Univ. Nacional de Mar del Plata, Gonzalo Maso Talou from  the Auckland Bioengineering Institute and Diego Figueredo  for their numerous comments and suggestions.","category":"page"},{"location":"about/","page":"About","title":"About","text":"The development of ONSAS has been partially supported by funds provided by the following agencies/projects:  Comisión de Investigación Científica (CSIC), Comisión Sectorial de Enseñanza (project: Rediseño de prácticas de enseñanza y evaluación en Resistencia de Materiales, manager, Prof. Pérez Zerpa), Agencia Nacional de Investigación e Innovación  (project VIOLETA, code FSE_1_2016_1_131837, manager, Prof. Usera.","category":"page"},{"location":"about/#Contact","page":"About","title":"Contact","text":"","category":"section"},{"location":"about/","page":"About","title":"About","text":"You can send an e-mail to jorgepz[AT]fing.edu.uy .","category":"page"},{"location":"about/#Affiliations","page":"About","title":"Affiliations","text":"","category":"section"},{"location":"#ONSAS:-an-Open-Nonlinear-Structural-Analysis-Solver","page":"Home","title":"ONSAS: an Open Nonlinear Structural Analysis Solver","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Join the chat at https://gitter.im/onsas_/community)","category":"page"},{"location":"#What-is-ONSAS?","page":"Home","title":"What is ONSAS?","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ONSAS is a GNU-Octave code for static/dynamic and linear/non-linear analysis of structures. The first version was developed for educational purposes and was published in a handbook of the course Análisis no lineal de Estructuras taught at Facultad de Ingeniería, Universidad de la República, Uruguay.","category":"page"},{"location":"#What-can-ONSAS-be-used-for?","page":"Home","title":"What can ONSAS be used for?","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The current version allows to perform dynamic/static nonlinear analyses of beam/truss/solid 3D structures. A reduced list of features is listed at next:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Elements 2-node truss, 2-node Bernoulli frame, 4-node tetrahedron.\nStatic analysis methods Newton-Raphson Method and Cylindrical Arc-Length Method.\nDynamic analysis methods Newmark Method.\nLoads nodal loads, time-history user-defined loading program.","category":"page"},{"location":"#Some-examples","page":"Home","title":"Some examples","text":"","category":"section"},{"location":"#A-wind-turbine-model","page":"Home","title":"A wind turbine model","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: wind)","category":"page"},{"location":"#A-chain-model","page":"Home","title":"A chain model","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: chain)","category":"page"},{"location":"#How-to-use-ONSAS","page":"Home","title":"How to use ONSAS","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The user should follow these steps to install and run ONSAS:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Download and install GNU-Octave\nDownload the ONSAS source files https://github.com/onsas/onsas/archive/v0.1.9.zip\nOpen GNU-Octave and run the ONSAS.m script\nSelect one of the available input files (or create one).","category":"page"},{"location":"","page":"Home","title":"Home","text":"We encourage the user to read the user's guide available at https://www.fing.edu.uy/~jorgepz/onsas/mainUserGuide.html.","category":"page"},{"location":"#Contributors-and-License","page":"Home","title":"Contributors and License","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The code is distributed under a GNU-GPL 3.0 license.","category":"page"},{"location":"","page":"Home","title":"Home","text":"See the full list of contributors and their affiliations in the Authors section.","category":"page"},{"location":"tutorials/HeatDiffusion/heat/#Heat-diffusion","page":"Heat diffusion","title":"Heat diffusion","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/#Introduction","page":"Heat diffusion","title":"Introduction","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"nabla cdot (k nabla T) + Q_h = ρ c dotT","category":"page"},{"location":"tutorials/HeatDiffusion/heat/#Variational-formulation","page":"Heat diffusion","title":"Variational formulation","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/#Finite-element-formulation","page":"Heat diffusion","title":"Finite-element formulation","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/#One-dimensional-example","page":"Heat diffusion","title":"One-dimensional example","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"Let us consider the one-dimensional heat equation, partial_t T(x t) = alpha partial^2_xxT(x t) where alpha = k  rho c is assumed uniform in the domain 01 and constant. Q_h = 0 is also assumed. The boundary conditions are given by Dirichlet conditions at both boundaries T(0t) = 0 and T(1t)=0 for all times. The initial condition is given by the following temperature distribution function: ","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"T(x t=0) = phi(x) = sin pi x + frac12sin 3pi x","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"The analytic solution in this case is","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"T(x t) = e^-(pi alpha)^2 tsin pi x + frac12e^-(3pi alpha)^2 tsin 3pi xqquad 0 leq x leq 1 t geq 0","category":"page"}]
}