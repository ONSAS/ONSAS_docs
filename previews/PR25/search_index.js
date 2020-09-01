var documenterSearchIndex = {"docs":
[{"location":"references/#References","page":"References","title":"References","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[BAT14]","page":"References","title":"[BAT14]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"Klaus-Jurgen Bathe.  Finite Element Procedures . 2014.","category":"page"},{"location":"theory/elements/","page":"Elements","title":"Elements","text":"mathbfK_diff^e = frac k^e A^eell^e \nleft\nbeginmatrix\n1  -1 \n-1  1\nendmatrix\nright","category":"page"},{"location":"theory/elements/","page":"Elements","title":"Elements","text":"mathbfC_intE^e = rho^e c^e A^e ell^e frac16 \nleft\nbeginmatrix\n2  1 \n1  2\nendmatrix\nright","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/#Static-Von-Mises-Truss","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/#Heat-diffusion","page":"Heat diffusion","title":"Heat diffusion","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/#Introduction","page":"Heat diffusion","title":"Introduction","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"nabla cdot (k nabla T) + Q_h = ρ c dotT","category":"page"},{"location":"tutorials/HeatDiffusion/heat/#Variational-formulation","page":"Heat diffusion","title":"Variational formulation","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/#Finite-element-formulation","page":"Heat diffusion","title":"Finite-element formulation","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/#One-dimensional-example","page":"Heat diffusion","title":"One-dimensional example","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"Let us consider the one-dimensional heat equation, partial_t T(x t) = alpha partial^2_xxT(x t) where alpha = k  rho c is assumed uniform in the domain 01 and constant. Q_h = 0 is also assumed. The boundary conditions are given by Dirichlet conditions at both boundaries T(0t) = 0 and T(1t)=0 for all times. The initial condition is given by the following temperature distribution function: ","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"T(x t=0) = phi(x) = sin pi x + frac12sin 3pi x","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"using Plots, LaTeXStrings\n\nϕ(x) = sin(π*x) + sin(3π*x)/2\n\nne = 50 # number of elements\nxdom = 0:1/ne:1\nT0 = ϕ.(xdom)\n\nplot(0:1e-3:1, ϕ, seriestype=:line, lab=L\"\\phi(x)\",\n     xlab=L\"x\", ylab=L\"T\", legend=:bottomright, title=\"Initial temperature profile\")\nplot!(xdom, T0, seriestype = :scatter, lab=L\"T(x=x_e, 0)\")\nsavefig(\"plot_initial_temperature.svg\")\n\nnothing","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"(Image: )","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"The analytic solution in this case is","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"T(x t) = e^-(pi alpha)^2 tsin pi x + frac12e^-(3pi alpha)^2 tsin 3pi xqquad 0 leq x leq 1 t geq 0","category":"page"},{"location":"theory/equations/#equations","page":"Equations","title":"equations","text":"","category":"section"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"ONSAS is developed to solve the set of nonlynear equations given by the Principle of Virtual Displacements (PVD) and the Principle of Virtual Temperatures (PVT). The PVD is given by the following set of nonlinear equations:","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"left(\n     mathbff_mas(mathbfu_t dotmathbfu_t ddotmathbfu_t) \n  +  mathbff_vis(dotmathbfu_t) \n  +  mathbff_int(mathbfu_t)\n  -  mathbff_ext(t)\nright) cdot delta mathbfu \n=\n0 qquad forall delta mathbfu in tildemathcalU","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"The PVT is given by:","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"left(\nnabla cdot ( k nabla T ) + Q_h  - rho c fracpartial Tpartial t\nright) delta T =\n0 qquad forall delta T in tildemathcalT","category":"page"},{"location":"theory/equations/#Variational-formulation-of-the-heat-flow-equation","page":"Equations","title":"Variational formulation of the heat flow equation","text":"","category":"section"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"    int_Omega k nabla T cdot nabla delta T dV\n  + int_Omega rho c fracpartial Tpartial t delta T dS\n  =\n    int_Omega Q_h delta T d V\n  + int_partial Omega k nabla T cdot hatmathbfn delta T d S \n qquad forall delta T in tildemathcalT","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"Considering the boundary conditions","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"left\nbeginarraylr\nT(mathbfxt) = f_D(t)  texton Gamma_D \n-k fracpartial Tpartial n (mathbfxt) = f_N(t)  texton Gamma_N \nk fracpartial Tpartial n (mathbfxt) = h left( T(mathbfxt)-T_infty right)   texton Gamma_R\nendarray\nright","category":"page"},{"location":"about/#Authors","page":"About","title":"Authors","text":"","category":"section"},{"location":"about/","page":"About","title":"About","text":"The following authors collaborated in various tasks including: design, development and testing of the code.","category":"page"},{"location":"about/","page":"About","title":"About","text":"Jorge M. Pérez Zerpa [1], leaded and managed the design and development of the code, developed the assembly functions, nonlinear truss element formulation, nonlinear static analysis function, designed and co-authored Newmark's method function, input and output functions, leaded the generation of the documentation.\nJ. Bruno Bazzano[1], [2], leaded the development of the nonlinear/linear buckling analysis modules, co-designed the code, developed and implemented validation examples, validated the HHT implementation.\nJoaquín Viera [1], leaded the development of the Linear Analysis module and input files, collaborated in the design and development of the input reading and output generation modules, leaded the development of GUI.\nMauricio Vanzulli [4] co-developed the Newmark's method functions and scripts, developed input files for the dynamic analysis examples.\nMarcelo Forets[6] developed the Neo-Hookean solid model.","category":"page"},{"location":"about/","page":"About","title":"About","text":"The following authors contributed by :","category":"page"},{"location":"about/","page":"About","title":"About","text":"Jean-Marc Battini[3], contributed functions associated with the computation of static internal forces of the nonlinear frame element.\nSebastian Toro[5], provided the functions: fLectDxf.m, fValGrCode.m and f_XData.m, used in the dxf import function.","category":"page"},{"location":"about/","page":"About","title":"About","text":"[1]: Instituto de Estructuras y Transporte, Facultad de Ingeniería, Universidad de la República, Montevideo, Uruguay","category":"page"},{"location":"about/","page":"About","title":"About","text":"[2]: Bazzano & Scelza Ingenieros, Montevideo, Uruguay","category":"page"},{"location":"about/","page":"About","title":"About","text":"[3]: Department of Civil and Architectural Engineering, KTH Royal Institute of Technology, Stockholm, Sweden","category":"page"},{"location":"about/","page":"About","title":"About","text":"[4]: Instituto de Ingeniería Mecánica y Producción Industrial, Facultad de Ingeniería, Universidad de la República, Montevideo, Uruguay.","category":"page"},{"location":"about/","page":"About","title":"About","text":"[5]: CIMEC Santa Fe, Argentina","category":"page"},{"location":"about/","page":"About","title":"About","text":"[6]: Centro Universitario Regional Este, Universidad de la República, Maldonado, Uruguay","category":"page"},{"location":"about/#Contributions-and-Acknowledgments","page":"About","title":"Contributions and Acknowledgments","text":"","category":"section"},{"location":"about/","page":"About","title":"About","text":"The functions in linearStiffMatPlate3D.m and assemblyUniform.m use part of the femplateexample.m code developed by Jorge Pérez Zerpa and Pablo Castrillo.","category":"page"},{"location":"about/","page":"About","title":"About","text":"J. M. Pérez Zerpa would like to thank: Pablo Blanco  from the hemolab.lncc.br group at LNCC Brazil,  Gonzalo Ares from Univ. Nacional de Mar del Plata, Gonzalo Maso Talou from  the Auckland Bioengineering Institute and Diego Figueredo  for their numerous comments and suggestions.","category":"page"},{"location":"about/","page":"About","title":"About","text":"The development of ONSAS has been partially supported by funds provided by the following agencies/projects:  Comisión de Investigación Científica (CSIC), Comisión Sectorial de Enseñanza (project: Rediseño de prácticas de enseñanza y evaluación en Resistencia de Materiales, manager, Prof. Pérez Zerpa), Agencia Nacional de Investigación e Innovación  (project VIOLETA, code FSE_1_2016_1_131837, manager, Prof. Usera.","category":"page"},{"location":"about/#Contact","page":"About","title":"Contact","text":"","category":"section"},{"location":"about/","page":"About","title":"About","text":"You can send an e-mail to jorgepz[AT]fing.edu.uy .","category":"page"},{"location":"about/#Affiliations","page":"About","title":"Affiliations","text":"","category":"section"},{"location":"tutorials/SimplePendulum/simple_pendulum/#Simple-pendulum","page":"Simple pendulum","title":"Simple pendulum","text":"","category":"section"},{"location":"tutorials/SimplePendulum/simple_pendulum/#Model","page":"Simple pendulum","title":"Model","text":"","category":"section"},{"location":"tutorials/SimplePendulum/simple_pendulum/","page":"Simple pendulum","title":"Simple pendulum","text":"In this tutorial we study a simple pendulum. The model has one truss element. This model is taken from [BAT14].","category":"page"},{"location":"tutorials/SimplePendulum/simple_pendulum/","page":"Simple pendulum","title":"Simple pendulum","text":"Parameter Value\nEs 10e11\nnu 0\nA 0.1\nl0 3.0443\nm 10\ng 9.81","category":"page"},{"location":"tutorials/SimplePendulum/simple_pendulum/#Result","page":"Simple pendulum","title":"Result","text":"","category":"section"},{"location":"tutorials/SimplePendulum/simple_pendulum/","page":"Simple pendulum","title":"Simple pendulum","text":"note: TO-DO\nAdd results.","category":"page"},{"location":"tutorials/LinearElastic/linear_elastic/#Linear-Elastic-Solid","page":"Linear elastic solid","title":"Linear Elastic Solid","text":"","category":"section"},{"location":"tutorials/LinearElastic/linear_elastic/","page":"Linear elastic solid","title":"Linear elastic solid","text":"In this tutorial we consider a linear elastic solid submitted to uniaxial loading. The geometry given by L_x, L_y and L_z, and a tension p is applied on the face at x=L_x, see the diagram below.","category":"page"},{"location":"tutorials/LinearElastic/linear_elastic/","page":"Linear elastic solid","title":"Linear elastic solid","text":"note: TO-DO\nContinue the tutorial as in the User Guide.","category":"page"},{"location":"tutorials/LinearElastic/linear_elastic/","page":"Linear elastic solid","title":"Linear elastic solid","text":"We begin by defining the structural properties of the mesh.","category":"page"},{"location":"tutorials/LinearElastic/linear_elastic/","page":"Linear elastic solid","title":"Linear elastic solid","text":"The material properties of the model are defined by the MELCS parameters. In this case a SVK material is considered.","category":"page"},{"location":"tutorials/LinearElastic/linear_elastic/","page":"Linear elastic solid","title":"Linear elastic solid","text":"This model can be solved analytically and the result shows a good match between the analytic result and the numerical solution obtained with ONSAS.","category":"page"},{"location":"howtouse/creatingModels/#Creating-structural-models","page":"Creating Models","title":"Creating structural models","text":"","category":"section"},{"location":"creatingModels/#Creating-structural-models","page":"Creating structural models","title":"Creating structural models","text":"","category":"section"},{"location":"#ONSAS:-an-Open-Nonlinear-Structural-Analysis-Solver","page":"Home","title":"ONSAS: an Open Nonlinear Structural Analysis Solver","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Join the chat at https://gitter.im/onsas_/community)","category":"page"},{"location":"#What-is-ONSAS?","page":"Home","title":"What is ONSAS?","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ONSAS is a GNU-Octave code for static/dynamic and linear/non-linear analysis of structures. The first version was developed for educational purposes and was published in a handbook of the course Análisis no lineal de Estructuras taught at Facultad de Ingeniería, Universidad de la República, Uruguay.","category":"page"},{"location":"#What-can-ONSAS-be-used-for?","page":"Home","title":"What can ONSAS be used for?","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The current version allows to perform dynamic/static nonlinear analyses of beam/truss/solid 3D structures. A reduced list of features is listed at next:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Elements 2-node truss, 2-node Bernoulli frame, 4-node tetrahedron.\nStatic analysis methods Newton-Raphson Method and Cylindrical Arc-Length Method.\nDynamic analysis methods Newmark Method.\nLoads nodal loads, time-history user-defined loading program.","category":"page"},{"location":"#Some-examples","page":"Home","title":"Some examples","text":"","category":"section"},{"location":"#A-wind-turbine-model","page":"Home","title":"A wind turbine model","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: wind)","category":"page"},{"location":"#A-chain-model","page":"Home","title":"A chain model","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: chain)","category":"page"},{"location":"#How-to-use-ONSAS","page":"Home","title":"How to use ONSAS","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The user should follow these steps to install and run ONSAS:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Download and install GNU-Octave\nDownload the ONSAS source files https://github.com/onsas/onsas/archive/v0.1.9.zip\nOpen GNU-Octave and run the ONSAS.m script\nSelect one of the available input files (or create one).","category":"page"},{"location":"#Contributors-and-License","page":"Home","title":"Contributors and License","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The code is distributed under a GNU-GPL 3.0 license.","category":"page"},{"location":"","page":"Home","title":"Home","text":"See the full list of contributors and their affiliations in the Authors section.","category":"page"}]
}
