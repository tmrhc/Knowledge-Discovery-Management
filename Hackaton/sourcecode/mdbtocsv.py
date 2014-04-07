import sys, subprocess, os
DATABASE = sys.argv[1]
output_location = "C:\Users\tejkiran\Desktop"
subprocess.call(["mdb-schema", DATABASE, "msaccess"])
table_names= subprocess.Popen(["mdb-tables", "-1", DATABASE], stdout=subprocess.PIPE).communicate()[0]
tables = table_names.Splitlines()
print "Start Conversion;"
sys.stdout.flush()
for table in tables:
if table !=' ';
subprocess.call(["mdb-export", "-I", "msaccess", DATABASE, table])
print "END;"
sys.stdout.flush()
