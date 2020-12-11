var documenterSearchIndex = {"docs":
[{"location":"references/#References","page":"References","title":"References","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#[BAT14]","page":"References","title":"[BAT14]","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"Klaus-Jurgen Bathe.  Finite Element Procedures . 2014.","category":"page"},{"location":"theory/elements/","page":"Elements","title":"Elements","text":"mathbfK_diff^e = frac k^e A^eell^e \nleft\nbeginmatrix\n1  -1 \n-1  1\nendmatrix\nright","category":"page"},{"location":"theory/elements/","page":"Elements","title":"Elements","text":"mathbfC_intE^e = rho^e c^e A^e ell^e frac16 \nleft\nbeginmatrix\n2  1 \n1  2\nendmatrix\nright","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/#Static-Von-Mises-Truss","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"","category":"section"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"In this tutorial, the static Von Mises Truss is considered. The aim of this example is to validate the Arc Length numerical method implementation by comparing the results provided by ONSAS with the analytical solution. ","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"The structural model can be seen in the following figure.","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"FIGURA","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"The bars are composed of an isotropic elastic and homogeneous material, with elastiity modulus E, Poisson coefficient nu=0 and length L. The node 2 is subjected to a variable nodal load P as shown in the figure. The self weight of the bars is neglected, so rho=0.","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/#MELCS-parameters","page":"Static Von-Mises Truss","title":"MELCS parameters","text":"","category":"section"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"The modelling of the structure begins with the definition of the MELCS parameters. ","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/#materialParams","page":"Static Von-Mises Truss","title":"materialParams","text":"","category":"section"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"Since both bars are composed of the same material, the cell of materialParams only has one vector, being:","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"materialParams = rho1Enu","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/#elementParams","page":"Static Von-Mises Truss","title":"elementParams","text":"","category":"section"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"Two different types of elements are considered, the nodes and the bars. The nodes will be assigned with the index 1 and the bars with the index 2. The elementsParams cell is therefore:","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"elementParams =  12 ","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/#loadsParams","page":"Static Von-Mises Truss","title":"loadsParams","text":"","category":"section"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"Only the nodal load P is applied to the structure and its direction corresponde to the global axis z. Consequently, the loadsParams cell only contains one vector, being:","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"loadsParams = 110000-10","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/#crossSecsParams","page":"Static Von-Mises Truss","title":"crossSecsParams","text":"","category":"section"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"Both bars are composed of a square cross section with area A. Therefore, the crossSecsParams cell results in:","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"crossSecsParams = 2sqrtAsqrtA","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/#springsParams","page":"Static Von-Mises Truss","title":"springsParams","text":"","category":"section"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"Two tifferent types of springs are considered. The nodes 1 and 3 are pinned and corresponds to one type of spring, the node 3 has the displacement about the global axis y restrained. The degrees of freedom are considered fully restrained so, the stiffness of the springs are considered as +infty in the direction that the restrain occurs. The springsParams cell is:","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"crossSecsParams = Bigg\nbeginarrayl\ninfty0infty0infty0 \n00infty000\nendarray\nBigg","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/#Nodes-and-Conec-matrices","page":"Static Von-Mises Truss","title":"Nodes and Conec matrices","text":"","category":"section"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"The bars form an angle theta=65^o with the global axis x direction. Then, the node coordinates can be obtained by simple algebra. The Nodes matrix results:","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/#Nodes-matrix","page":"Static Von-Mises Truss","title":"Nodes matrix","text":"","category":"section"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"Nodes = Bigg\nbeginarrayccc\n0  0  0 \nauxx  0  auxz \n2*auxx  0  0 \nendarray\nBigg\nbeginarrayccc\nNode1 \nNode2 \nNode3 \nendarray","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"Where the variables auxx and auxz are defined as:","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"beginarrayl\nauxx=cosleft(dfractheta*pi180right)*L \nauxz=sinleft(dfractheta*pi180right)*L\nendarray","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/#Conec-matrix","page":"Static Von-Mises Truss","title":"Conec matrix","text":"","category":"section"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"The Conec cell contains the information defined by the MELCS parameters and also the joint connectivity of the elements. Then, the first five indexes of each vector in the Conec matrix corresponds to the MELCS parameters and the last ones to the joint connectivity of the corresponding element. The Conec cell is defined as:","category":"page"},{"location":"tutorials/StaticVonMisesTruss/staticVonMisesTruss/","page":"Static Von-Mises Truss","title":"Static Von-Mises Truss","text":"left\nbeginarrayccccccc\n 0 1 0 0 1 1  \n 0 1 1 0 2 2  \n 0 1 0 0 1 3  \n 1 2 0 1 0 12  \n 1 2 0 1 0 23  \nendarray\nright\nbeginarrayccccccc\nFixednode \nLoadednode \nFixednode \nTrusselement \nTrusselement\nendarray","category":"page"},{"location":"theory/equations/#equations","page":"Equations","title":"equations","text":"","category":"section"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"ONSAS is developed to solve the set of nonlynear equations given by the Principle of Virtual Displacements (PVD) and the Principle of Virtual Temperatures (PVT). The PVD is given by the following set of nonlinear equations:","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"left(\n     mathbff_mas(mathbfu_t dotmathbfu_t ddotmathbfu_t) \n  +  mathbff_vis(dotmathbfu_t) \n  +  mathbff_int(mathbfu_t)\n  -  mathbff_ext(t)\nright) cdot delta mathbfu \n=\n0 qquad forall delta mathbfu in tildemathcalU","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"The PVT is given by:","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"left(\nnabla cdot ( k nabla T ) + Q_h  - rho c fracpartial Tpartial t\nright) delta T =\n0 qquad forall delta T in tildemathcalT","category":"page"},{"location":"theory/equations/#Variational-formulation-of-the-heat-flow-equation","page":"Equations","title":"Variational formulation of the heat flow equation","text":"","category":"section"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"    int_Omega k nabla T cdot nabla delta T dV\n  + int_Omega rho c fracpartial Tpartial t delta T dV\n  =\n    int_Omega Q_h delta T d V\n  + int_partial Omega k nabla T cdot hatmathbfn delta T d S \n qquad forall delta T in tildemathcalT","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"Considering the boundary conditions","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"left\nbeginarraylr\nT(mathbfxt) = f_D(t)  texton Gamma_D \n-k fracpartial Tpartial n (mathbfxt) = f_N(mathbfxt)  texton  Gamma_N \n-k fracpartial Tpartial n (mathbfxt) = h left( T(mathbfxt)-T_infty(t) right)   texton  Gamma_R\nendarray\nright","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"where h is the convection coefficient and T_infty(t) is the ambient temperature at time t.","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"    int_Omega k nabla T cdot nabla delta T dV\n  + int_Omega rho c fracpartial Tpartial t delta T dV\n  + int_Gamma_R h T(mathbfxt) delta T d S \n  =\n    int_Omega Q_h delta T d V\n  + int_Gamma_N q_inp(mathbfxt)  delta T d S \n  + int_Gamma_R h T_infty(t) delta T d S \n\n qquad forall delta T in tildemathcalT","category":"page"},{"location":"theory/equations/","page":"Equations","title":"Equations","text":"where q_inp is the input heat flow q_inp = -f_N.","category":"page"},{"location":"tutorials/HeatDiffusion/heat/#Heat-diffusion","page":"Heat diffusion","title":"Heat diffusion","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/#Introduction","page":"Heat diffusion","title":"Introduction","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"nabla cdot (k nabla T) + Q_h = ρ c dotT","category":"page"},{"location":"tutorials/HeatDiffusion/heat/#Variational-formulation","page":"Heat diffusion","title":"Variational formulation","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/#Finite-element-formulation","page":"Heat diffusion","title":"Finite-element formulation","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/#One-dimensional-example","page":"Heat diffusion","title":"One-dimensional example","text":"","category":"section"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"Let us consider the one-dimensional heat equation, partial_t T(x t) = alpha partial^2_xxT(x t) where alpha = k  rho c is assumed uniform in the domain 01 and constant. Q_h = 0 is also assumed. The boundary conditions are given by Dirichlet conditions at both boundaries T(0t) = 0 and T(1t)=0 for all times. The initial condition is given by the following temperature distribution function: ","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"T(x t=0) = phi(x) = sin pi x + frac12sin 3pi x","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"using Plots, LaTeXStrings\n\nϕ(x) = sin(π*x) + sin(3π*x)/2\n\nne = 50 # number of elements\nxdom = 0:1/ne:1\nT0 = ϕ.(xdom)\n\nplot(0:1e-3:1, ϕ, seriestype=:line, lab=L\"\\phi(x)\",\n     xlab=L\"x\", ylab=L\"T\", legend=:bottomright, title=\"Initial temperature profile\")\nplot!(xdom, T0, seriestype = :scatter, lab=L\"T(x=x_e, 0)\")\nsavefig(\"plot_initial_temperature.svg\")\n\nnothing","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"(Image: )","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"The analytic solution in this case is","category":"page"},{"location":"tutorials/HeatDiffusion/heat/","page":"Heat diffusion","title":"Heat diffusion","text":"T(x t) = e^-(pi alpha)^2 tsin pi x + frac12e^-(3pi alpha)^2 tsin 3pi xqquad 0 leq x leq 1 t geq 0","category":"page"},{"location":"about/#Authors","page":"About","title":"Authors","text":"","category":"section"},{"location":"about/","page":"About","title":"About","text":"The following authors collaborated in various tasks including: design, development and testing of the code.","category":"page"},{"location":"about/","page":"About","title":"About","text":"Jorge M. Pérez Zerpa [1], leaded and managed the design and development of the code, developed the assembly functions, nonlinear truss element formulation, nonlinear static analysis function, designed and co-authored Newmark's method function, input and output functions, leaded the generation of the documentation.\nJ. Bruno Bazzano[1], [2], leaded the development of the nonlinear/linear buckling analysis modules, co-designed the code, developed and implemented validation examples, validated the HHT implementation.\nJoaquín Viera [1], leaded the development of the Linear Analysis module and input files, collaborated in the design and development of the input reading and output generation modules, leaded the development of GUI.\nMauricio Vanzulli [4] co-developed the Newmark's method functions and scripts, developed input files for the dynamic analysis examples.\nMarcelo Forets[6] developed the Neo-Hookean solid model.","category":"page"},{"location":"about/","page":"About","title":"About","text":"The following authors contributed by :","category":"page"},{"location":"about/","page":"About","title":"About","text":"Jean-Marc Battini[3], contributed functions associated with the computation of static internal forces of the nonlinear frame element.\nSebastian Toro[5], provided the functions: fLectDxf.m, fValGrCode.m and f_XData.m, used in the dxf import function.","category":"page"},{"location":"about/","page":"About","title":"About","text":"[1]: Instituto de Estructuras y Transporte, Facultad de Ingeniería, Universidad de la República, Montevideo, Uruguay","category":"page"},{"location":"about/","page":"About","title":"About","text":"[2]: Bazzano & Scelza Ingenieros, Montevideo, Uruguay","category":"page"},{"location":"about/","page":"About","title":"About","text":"[3]: Department of Civil and Architectural Engineering, KTH Royal Institute of Technology, Stockholm, Sweden","category":"page"},{"location":"about/","page":"About","title":"About","text":"[4]: Instituto de Ingeniería Mecánica y Producción Industrial, Facultad de Ingeniería, Universidad de la República, Montevideo, Uruguay.","category":"page"},{"location":"about/","page":"About","title":"About","text":"[5]: CIMEC Santa Fe, Argentina","category":"page"},{"location":"about/","page":"About","title":"About","text":"[6]: Centro Universitario Regional Este, Universidad de la República, Maldonado, Uruguay","category":"page"},{"location":"about/#Contributions-and-Acknowledgments","page":"About","title":"Contributions and Acknowledgments","text":"","category":"section"},{"location":"about/","page":"About","title":"About","text":"The functions in linearStiffMatPlate3D.m and assemblyUniform.m use part of the femplateexample.m code developed by Jorge Pérez Zerpa and Pablo Castrillo.","category":"page"},{"location":"about/","page":"About","title":"About","text":"J. M. Pérez Zerpa would like to thank: Pablo Blanco  from the hemolab.lncc.br group at LNCC Brazil,  Gonzalo Ares from Univ. Nacional de Mar del Plata, Gonzalo Maso Talou from  the Auckland Bioengineering Institute and Diego Figueredo  for their numerous comments and suggestions.","category":"page"},{"location":"about/","page":"About","title":"About","text":"The development of ONSAS has been partially supported by funds provided by the following agencies/projects:  Comisión de Investigación Científica (CSIC), Comisión Sectorial de Enseñanza (project: Rediseño de prácticas de enseñanza y evaluación en Resistencia de Materiales, manager, Prof. Pérez Zerpa), Agencia Nacional de Investigación e Innovación  (project VIOLETA, code FSE_1_2016_1_131837, manager, Prof. Usera.","category":"page"},{"location":"about/#Contact","page":"About","title":"Contact","text":"","category":"section"},{"location":"about/","page":"About","title":"About","text":"You can send an e-mail to jorgepz[AT]fing.edu.uy .","category":"page"},{"location":"about/#Affiliations","page":"About","title":"Affiliations","text":"","category":"section"},{"location":"tutorials/SimplePendulum/simple_pendulum/#Simple-pendulum","page":"Simple pendulum","title":"Simple pendulum","text":"","category":"section"},{"location":"tutorials/SimplePendulum/simple_pendulum/#Model","page":"Simple pendulum","title":"Model","text":"","category":"section"},{"location":"tutorials/SimplePendulum/simple_pendulum/","page":"Simple pendulum","title":"Simple pendulum","text":"In this tutorial we study a simple pendulum. The model has one truss element. This model is taken from [BAT14].","category":"page"},{"location":"tutorials/SimplePendulum/simple_pendulum/","page":"Simple pendulum","title":"Simple pendulum","text":"Parameter Value\nEs 10e11\nnu 0\nA 0.1\nl0 3.0443\nm 10\ng 9.81","category":"page"},{"location":"tutorials/SimplePendulum/simple_pendulum/#Result","page":"Simple pendulum","title":"Result","text":"","category":"section"},{"location":"tutorials/SimplePendulum/simple_pendulum/","page":"Simple pendulum","title":"Simple pendulum","text":"note: TO-DO\nAdd results.","category":"page"},{"location":"howtouse/creatingModels/#Creating-structural-models","page":"Creating Models","title":"Creating structural models","text":"","category":"section"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"The structural models are defined through a set of variables definitions in a .m script.","category":"page"},{"location":"howtouse/creatingModels/#Required-variables","page":"Creating Models","title":"Required variables","text":"","category":"section"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"Nodes: matrix with the coordinates of all the nodes. The i-th row contains the three coordinates of the node i: x_i   y_i  z_i,\nConec: cell structure with the connectivity information. The i1 entry contains the vector with the MELCS (Material, Element, Load, CrossSection and Springs) indexes and the nodes of the i-th element.","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"The structure of the cell is:","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":" MaterialIndex  ElementIndex  LoadIndex  CrossSectionIndex  SpringIndex  Node_1 dots Node_n ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"where the five indexes are natural numbers and n is the number of nodes required by the type of element. If noproperty is assigned the 0 index can be used. ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"materialsParams: a cell structure with a vector with the material properties of the i-th type of material in the i-th entry.","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"The vector of parameters is defined as:","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":" rho  k_thCo  c_spHe  hyperModel  p_1 dots p_n_P ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"where k_thCo is the thermal conductivity (assuming thermal isotropy), c_spHe is the specific heat, n_P is the number of parameters of the constitutive model and mathbfp is the vector of constitutive parameters.","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"elementsParams: cell structure with the element types information. Each different type of element corresponds to a different number. The properties of the element are in correspondency of the ElementIndex defined in the Conec cell structure. The structure of the cell is:","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":" elemType_1 dots elemType_n  ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"crossSecsParams: cell structure with the information of the cross section parameters. The i1 entry contains the vector with the paremeters in correspondency with the CrossSectionIndex defined in the Conec cell structure. ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"The structure of the cell is:","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"crossSectionType crossSectionParam_1 dots crossSectionParam_n","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"With n being the number of parameters of the cross section type.","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"springsParams: cell structure with the information of the springs or supports in the structural model. The i1 entry contains the vector with the paremeters in correspondency with the SpringIndex defined in the Conec cell structure. ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"The structure of the cell is:","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":" u_x theta_x u_y theta_y u_z theta_z ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"where each entry of the i-th type corresponds with the spring stiffness. In casse of ideal supports, the stiffness shall be assigned as +infty.","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"problemName: string with the name of the problem, used to name folders and output files. \ndirOnsas: array with the directory of the file ONSAS.m.","category":"page"},{"location":"howtouse/creatingModels/#Material-parameters","page":"Creating Models","title":"Material parameters","text":"","category":"section"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"Model 1: Linear material with small strains (Saint-Venant-Kirchhoff). Model 2: Linear material with Green Lagrange strains (Saint-Venant-Kirchhoff). Model 3: Linear material with rotated engineering strains (Saint-Venant-Kirchhoff).","category":"page"},{"location":"howtouse/creatingModels/#Cross-section-parameters","page":"Creating Models","title":"Cross-section parameters","text":"","category":"section"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"General section: ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":" 1AI_xI_yI_z(J_xJ_yJ_z) ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"Where A, Ix, Iy and Iz corresponds to the cross section area, the torsional stiffness and the bending stiffnesses respectively.","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"Rectangular cross section: ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"2w_yw_z","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"Where w_y and W_z corresponds to the dimension parallel to the y and z local axes respectively.","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"Solid circular cross section: ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"3D ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"With D being the diameter.","category":"page"},{"location":"howtouse/creatingModels/#Elements-params","page":"Creating Models","title":"Elements params","text":"","category":"section"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"The elementsParams cell contains a vector in each entry. The first entry of each vector contains the type of element, for each type of element a different set of optional parameters can be included as other entries of the vector. These are the available types of elements:","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"Node: used to add loads or spring conditions.\nTruss: the vector used for the truss element is:","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":" 2 quad booleanConsistentMassMat ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"Where booleanConsistentMassMat is a boolean that sets if the consistent or lumped form of the mass matrix is used.","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"Frame: the vector used for the frame element is:","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":" 3 quad booleanConsistentMassMat ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"Tetrahedron: the vector used for the thetrahedron element is:","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":" 4 quad booleanConsistentMassMat ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"Triangle: (used as faces to include boundary conditions) ","category":"page"},{"location":"howtouse/creatingModels/#Loads-params","page":"Creating Models","title":"Loads params","text":"","category":"section"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"Cell structure with a vector with parameters given by:","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":" globallocal  variableconstant  f_x m_x  f_y m_y   f_z m_z q ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"where q is an optional entry representing the input heat flow.","category":"page"},{"location":"howtouse/creatingModels/#Optional-variables","page":"Creating Models","title":"Optional variables","text":"","category":"section"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"reportBoolean: boolean to set if LaTeX report is generated (1) or not (0) [default: 1]\nanalyticSolFlag: flag indicating if an analytical solution is provided, if so a function must be defined.\nanalyticCheckTolerance: tolerance considered for the analytic verification default: 1e-8.\nnumericalMethodParams: vector with parameters of the numerical method used to solve the equations (default: 0)\nbooleanSelfWeightZ: boolean for addition of self weight (only for truss elements)","category":"page"},{"location":"howtouse/creatingModels/#Analytical-solution-verification","page":"Creating Models","title":"Analytical solution verification","text":"","category":"section"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"The user can provide analytical solutions, which are automatically compared with the numerical solution provided by ONSAS. The solutions can be provided through different methods or formats, which are set by the variable analyticSolFlag. The formats of the solutions and the corresponding error measures used for the validation are:","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"analyticSolFlag = 1: u_At function of control displacement as a function of time is provided. In this case the error measure is calculated as ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"normRelativeError =frac1t_f left frac  u_Nt - u_At   u_At   right_L_10t_f ","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"analyticSolFlag = 2: in this case the user provides the function \\verb|analyticFunc| with one argument lambda(u). This function computes the loadFactor as a function of the control displacement value. After the analysis and given an obtained numerical displacements history u_Nt, the analytical load factor history lambda(u_Nt) is calculated and compared with the lambda_Nt values","category":"page"},{"location":"howtouse/creatingModels/","page":"Creating Models","title":"Creating Models","text":"\tnormRelativeError = frac left lambda( u_Nt) - lambda_Nt right_L_10t_f  left lambda_Nt right_L_10t_f    ","category":"page"},{"location":"howtouse/install/#Installation","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/#Uniaxial-Extension-Solid","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"","category":"section"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/#The-problem","page":"Uniaxial Extension Solid","title":"The problem","text":"","category":"section"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"In this tutorial an elastic Saint-Venant-Kirchhoff solid submitted to a uniaxial loading test is considered. The geometry is given by a rectangular cuboid with dimensions L_x=1, L_y=1 and L_z=1, and a tension vector p = 3 textbfe_x is applied on the face at x=L_x.","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/#The-ONSAS-example-file","page":"Uniaxial Extension Solid","title":"The ONSAS example file","text":"","category":"section"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"The main features of the onsasExample_uniaxialExtension.m file are described in this section.","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/#MELCS-parameters","page":"Uniaxial Extension Solid","title":"MELCS parameters","text":"","category":"section"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"Before creating the finite element mesh discretization, the MELCS parameters shall be defined. The material properties of the model are defined by","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"materialsParams = {[ 0 2 E nu ]} ;","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"where the first entry of the vector is the density (considered zero), the second is the constitutive behavior (2 for SVK material) and E = 1 and nu = 03 are the constitutive parameters of the SVK model.","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"For the elements, two types of elements are used in the model: triangles (number 5) for loading and spring boundary conditions, and tetrahedra (number 4).","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"elementsParams = { [ 5   ] ; ...\n                   [ 4 2 ] } ; % analytic constitutive tensor","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"where the second entry of the vector in the second entry of the cell is the flag corresponding to the method for computation of the constitutive matrix (2 for analytical).","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"loadsParams = {[ 1 1  p 0 0 0 0 0 ]} ;  % global coords tension applied","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"crossSecsParams = cell(1,1) ; %","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"springsParams = {[ inf 0  0   0   0   0 ] ; ...\n                 [ 0   0  inf 0   0   0 ] ; ...\n                 [ 0   0  0   0   inf 0 ] } ;\n","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/#Mesh","page":"Uniaxial Extension Solid","title":"Mesh","text":"","category":"section"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"The solid is discretized using a mesh formed by 8 nodes with the following coordinates matrix","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"Nodes = [ 0    0    0 ; ...\n          0    0   Lz ; ...\n          0   Ly   Lz ; ...\n          0   Ly    0 ; ...\n          Lx   0    0 ; ...\n          Lx   0   Lz ; ...\n          Lx  Ly   Lz ; ...\n          Lx  Ly    0 ] ;","category":"page"},{"location":"tutorials/uniaxialExtension/uniaxialExtension/","page":"Uniaxial Extension Solid","title":"Uniaxial Extension Solid","text":"(Image: )","category":"page"},{"location":"#ONSAS:-an-Open-Nonlinear-Structural-Analysis-Solver","page":"Home","title":"ONSAS: an Open Nonlinear Structural Analysis Solver","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Join the chat at https://gitter.im/onsas_/community)","category":"page"},{"location":"#What-is-ONSAS?","page":"Home","title":"What is ONSAS?","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ONSAS is a GNU-Octave code for static/dynamic and linear/non-linear analysis of structures. The first version was developed for educational purposes and was published in a handbook of the course Análisis no lineal de Estructuras taught at Facultad de Ingeniería, Universidad de la República, Uruguay.","category":"page"},{"location":"#What-can-ONSAS-be-used-for?","page":"Home","title":"What can ONSAS be used for?","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The current version allows to perform dynamic/static nonlinear analyses of beam/truss/solid 3D structures. A reduced list of features is listed at next:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Elements 2-node truss, 2-node Bernoulli frame, 4-node tetrahedron.\nStatic analysis methods Newton-Raphson Method and Cylindrical Arc-Length Method.\nDynamic analysis methods Newmark Method.\nLoads nodal loads, time-history user-defined loading program.","category":"page"},{"location":"#Some-examples","page":"Home","title":"Some examples","text":"","category":"section"},{"location":"#A-wind-turbine-model","page":"Home","title":"A wind turbine model","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: wind)\t","category":"page"},{"location":"#A-tower-model","page":"Home","title":"A tower model","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: tower)\t","category":"page"},{"location":"#A-chain-model","page":"Home","title":"A chain model","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: chain)","category":"page"},{"location":"#How-to-use-ONSAS","page":"Home","title":"How to use ONSAS","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The user should follow these steps to install and run ONSAS:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Download and install GNU-Octave\nDownload the ONSAS source files https://github.com/onsas/onsas/archive/v0.1.9.zip\nOpen GNU-Octave and run the ONSAS.m script\nSelect one of the available input files (or create one).","category":"page"},{"location":"#Contributors-and-License","page":"Home","title":"Contributors and License","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The code is distributed under a GNU-GPL 3.0 license.","category":"page"},{"location":"","page":"Home","title":"Home","text":"See the full list of contributors and their affiliations in the Authors section.","category":"page"}]
}