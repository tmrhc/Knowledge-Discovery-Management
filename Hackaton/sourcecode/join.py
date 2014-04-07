import  rscripting, sys, string, os
gp= rscripting.create()
output_location= "C:\Users\tejkiran\Desktop"
output_folder= "KDM"
personal_gdb="City_Govt_Finances.mdb"
MissingPoles = "MissingPoles"
PolesINGIS= "PolesINGIS"
PoleData= "C:\Users\tejkiran\Desktop\City_Govt_Fin.mdb\\PoleData"
PolesToJoin = " C:\Users\tejkiran\Desktop\City_Govt_Fin.mdb"
gp.AddToolbox("C:/Program Files/ArcGIS/ArcToolbox/Toolboxes/Data Management Tools.tbx")
gp.toolbox = "management"
gp.CreatePersonalGDB("C:/Users/tejkiran/Desktop", "Joined_City_Govt_Fin.mdb")
print "Joined_City_Govt_Fin.mdb Created"
gp.refreshcatalog(output_location)
print gp.GetMessages()
gp.DeleteField_management(PoleData_2_,"Sort_Code,GID_Compatible_ID,State Code, Type Code, Year of Data, Year of Pop Data, Year of Retirement Data, Year of X04 Data, Year of Liquor Data, Version,  Revise Date, Data Flag, Imputed Record, Total Rev-Own Sources, Gen Rev-Own Sources, Tot Sales & Gr Rec Tax, Total Gen Sales Tax (T09), Total Select Sales Tax, Other Taxes, Total IG Revenue, Total Fed IG Revenue, Fed IGR-Gen Rev Shar (B27), Total State IG Revenue, Tot Local IG Rev") 
print "Deleted Columns successfully"
gp.maketableview(poledata,"Year4;ID;Name;SourceCode;Name;Population;TotalRevenue;GenerealRevenue;TotalTaxes;PropertyTax(T01);TotalDebtOutstanding")
print "TableviewSuccessful"
gp.copyrows("PolesINGIS","Joined_City_Govt_Fin.mdb/PolesToJoin")
print "successfully copied rows"
gp.maketableview(PolesToJoin,"Year4;ID;Name;SourceCode;Name;Population;TotalRevenue;GenerealRevenue;TotalTaxes;PropertyTax(T01);TotalDebtOutstanding")
gp.AddJoin(Joined_City_Govt_Fin,"Name")
print "joined successfully completed"
